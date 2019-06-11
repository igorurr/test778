import { getUserFromSession } from './user';

// пример данного "бэкенда" не претендует на роль продуктового
// и был разработан с целью демонстрации работы фронта

const posts = [
    {
        id: 0,
        login: "admin",
        password: "admin"
    }
];
let newPost = 1;

const createPost = ( post ) => {
    const newPostObj = { ...post, id: newPost };
    posts.push( newPostObj );
    newPost++;
    return newPostObj;
}

const updatePost = ( id, post ) => {
    const i = posts.findIndex( ({id: pid}) => pid === id );
    posts[i] = { ...posts[i], ...post, id };
    return posts[i];
}





export const createPostApi = ( token, post ) => {
    const userId = getUserFromSession( token );

    if( !userId )
        return new Error("Ошибка авторизации");

    const newPostObj = createPost( post );
    return newPostObj;
}

export const updatePostApi = ( token, post ) => {
    const userId = getUserFromSession( token );

    if( !userId )
        return new Error("Ошибка авторизации");

    if( userId !== post.user )
        return new Error("Это не ваш пост");

    return updatePost( post.id, post );
}
