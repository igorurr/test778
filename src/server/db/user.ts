import { createRandStr } from "./helpers";
import { createApiMethod } from "../helpers";
import { IUser, ISession } from "../types/user";

import { users as initUsers } from "../initData";

import { IUserEditForm } from "../../types/user";

// пример данного "бэкенда" не претендует на роль продуктового
// и был разработан с целью демонстрации работы фронта

const users: IUser[] = [...initUsers];
let newUser = 3;

const createUser = (user: IUser) => {
  const newUserObj = { ...user, id: newUser };
  users.push(newUserObj);
  newUser++;
  return newUserObj;
};

const updateUser = (id: number, user: IUserEditForm) => {
  const i = users.findIndex(({ id: uid }) => uid === id);
  users[i] = { ...users[i], ...user };
  return users[i];
};

const sessions: ISession[] = [];
// { token, user }

const createSession = (user: number) => {
  const token = createRandStr(String(user));
  sessions.push({ user, token });
  return token;
};

export const findUser = (id: number): IUser | undefined => {
  return users.find(us => us.id === id);
};

export const getSimpleUser = ({ password, ...fields }: IUser): IUser => {
  return fields;
};

export const findUserByLogin = (login: string) => {
  return users.find(us => us.login === login);
};

export const getUserFromSession = (token: string): number => {
  const session = sessions.find(sess => sess.token === token);
  return session ? session.user : 0;
};

export const getMeData = createApiMethod((request, response) => {
  const { token } = request.headers;

  const uid = getUserFromSession(token);

  if (!uid) return [403, { error: "Ошибка авторизации" }];

  return [200, { user: findUser(uid) }];
});

export const getData = createApiMethod((request, response) => {
  const { token } = request.headers;
  const { id } = request.params;

  const uid = getUserFromSession(token);

  if (!uid) return [403, { error: "Ошибка авторизации" }];

  const user = findUser(Number(id));

  if (!user) return [404, { error: "Пользователя не существует" }];

  return [200, { user: getSimpleUser(user) }];
});

export const login = createApiMethod((request, response) => {
  const { login, password } = request.body;

  const user = findUserByLogin(login);

  if (!user)
    return [403, { login: "Пользователя с таким логином не существует" }];

  if (user.password !== password) return [403, { login: "Неверный пароль" }];

  const token = createSession(user.id);
  return [200, { user, token }];
});

export const registration = createApiMethod((request, response) => {
  const user: IUser = request.body;

  if (users.find(us => us.login === user.login))
    return [403, { login: "Пользователь с таким логином уже существует" }];

  const newUserObj = createUser(user);

  const token = createSession(newUserObj.id);
  return [200, { user: newUserObj, token }];
});

export const updateUserApi = createApiMethod((request, response) => {
  const user: IUserEditForm = request.body;
  const { token } = request.headers;

  const tokenUserId = getUserFromSession(token);
  if (!tokenUserId) return [403, { error: "Ошибка авторизации" }];

  return [200, { user: updateUser(tokenUserId, user) }];
});
