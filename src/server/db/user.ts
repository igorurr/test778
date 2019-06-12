import { createRandStr } from "./helpers";
import { createApiMethod } from "../helpers";
import { IUser, ISession } from "../../types/user";

// пример данного "бэкенда" не претендует на роль продуктового
// и был разработан с целью демонстрации работы фронта

const users: IUser[] = [
  {
    id: 1,
    login: "admin",
    password: "admin",
    email: "admin@admin.admin",
    phone: "+75555555555",
    firstName: "admin",
    secondName: "adminovich",
    thirdName: "adminov",
  },
];
let newUser = 2;

const createUser = (user: IUser) => {
  const newUserObj = { ...user, id: newUser };
  users.push(newUserObj);
  newUser++;
  return newUserObj;
};

const updateUser = (id: number, user: IUser) => {
  const i = users.findIndex(({ id: uid }) => uid === id);
  users[i] = { ...users[i], ...user, id };
  return users[i];
};

const sessions: ISession[] = [];
// { token, user }

const createSession = (user: number) => {
  const token = createRandStr(String(user));
  sessions.push({ user, token });
  return token;
};

export const findUser = (id: number) => {
  return users.find(us => us.id === id);
};

export const findUserByLogin = (login: string) => {
  return users.find(us => us.login === login);
};

export const getUserFromSession = (token: string): number => {
  const session = sessions.find(sess => sess.token === token);
  return session ? session.user : 0;
};

export const getMeData = createApiMethod((request, response) => {
  const { token } = request.query;

  const uid = getUserFromSession(token);

  if (!uid) {
    return [403, { error: "Ошибка авторизации" }];
  }

  return [200, { user: findUser(uid) }];
});

export const login = createApiMethod((request, response) => {
  const { login, password } = request.query;

  const user = findUserByLogin(login);

  if (!user)
    return [403, { error: "Пользователя с таким логином не существует" }];

  if (user.password !== password) return [403, { error: "Неверный пароль" }];

  const token = createSession(user.id);
  return [200, { user, token }];
});

export const registration = createApiMethod((request, response) => {
  const { user } = request.query;

  if (users.find(us => us.login === user.login))
    return [403, { error: "Пользователь с таким логином уже существует" }];

  const newUserObj = createUser(user);

  const token = createSession(newUserObj.id);
  return [200, { user: newUserObj, token }];
});

export const updateUserApi = createApiMethod((request, response) => {
  const { token, user } = request.query;

  const tokenUserId = getUserFromSession(token);
  if (!tokenUserId) return [403, { error: "Ошибка авторизации" }];

  return [200, { user: updateUser(tokenUserId, user) }];
});
