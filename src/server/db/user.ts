import { createRandStr } from './helpers';

// пример данного "бэкенда" не претендует на роль продуктового
// и был разработан с целью демонстрации работы фронта

const users = [
    {
        id: 0,
        login: "admin",
        password: "admin"
    }
];
let newUser = 1;

const createUser = ( user ) => {
    const newUserObj = { ...user, id: newUser };
    users.push( newUserObj );
    newUser++;
    return newUserObj;
}

const updateUser = ( id, user ) => {
    const i = users.findIndex( ({id: uid}) => uid === id );
    users[i] = { ...users[i], ...user, id };
    return users[i];
}

export const findUser = ( id ) => {
    return users.find( us => us.id === id );
}


const sessions = [];
// { token, user }



const createSession = ( user ) => {
    const token = createRandStr(user);
    sessions.push( { user, token } );
    return token;
}

export const getUserFromSession = ( token ) => {
    const session = sessions.find( sess => sess.token === token );
    return session ? session.id : null;
}





export const login = ( login, password ) => {
    const user = users.find( us => us.login === login );

    if( !user )
        return new Error("Пользователя с таким логином не существует");

    if( user.password !== password )
        return new Error("Неверный пароль");

    const token = createSession( user.id );
    return {user, token};
}

export const registration = ( user ) => {
    if( users.find( us => us.login === user.login ) )
        return new Error("Пользователя с таким логином уже существует");

    const newUserObj = createUser(user);

    const token = createSession( newUserObj.id );
    return {newUserObj, token};
}

export const updateUserApi = ( token, user ) => {
    const tokenUserId = getUserFromSession( token );
    if( !tokenUserId )
        return new Error("Ошибка авторизации");

    return updateUser( tokenUserId, user );
}
