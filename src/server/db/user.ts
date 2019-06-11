import { createRandStr } from './helpers';
import { IUser, ISession } from '../../types/user';

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
        thirdName: "adminov"
    }
];
let newUser = 2;

const createUser = ( user: IUser ) => {
    const newUserObj = { ...user, id: newUser };
    users.push( newUserObj );
    newUser++;
    return newUserObj;
}

const updateUser = ( id: number, user: IUser ) => {
    const i = users.findIndex( ({id: uid}) => uid === id );
    users[i] = { ...users[i], ...user, id };
    return users[i];
}

export const findUser = ( id: number ) => {
    return users.find( us => us.id === id );
}


const sessions: ISession[] = [];
// { token, user }



const createSession = ( user: number ) => {
    const token = createRandStr(String(user));
    sessions.push( { user, token } );
    return token;
}

export const getUserFromSession = ( token: string ): number => {
    const session = sessions.find( sess => sess.token === token );
    return session ? session.user : 0;
}





export const login = ( login: string, password: string ) => {
    const user = users.find( us => us.login === login );

    if( !user )
        return new Error("Пользователя с таким логином не существует");

    if( user.password !== password )
        return new Error("Неверный пароль");

    const token = createSession( user.id );
    return {user, token};
}

export const registration = ( user: IUser ) => {
    if( users.find( us => us.login === user.login ) )
        return new Error("Пользователя с таким логином уже существует");

    const newUserObj = createUser(user);

    const token = createSession( newUserObj.id );
    return {newUserObj, token};
}

export const updateUserApi = ( token: string, user: IUser ) => {
    const tokenUserId = getUserFromSession( token );
    if( !tokenUserId )
        return new Error("Ошибка авторизации");

    return updateUser( tokenUserId, user );
}
