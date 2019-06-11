import { getUserFromSession } from './user';
import { IPost, IPostId } from '../../types/blog';

// пример данного "бэкенда" не претендует на роль продуктового
// и был разработан с целью демонстрации работы фронта

const posts: IPost[] = [
    {
        id: 1,
        smallContent: '1 post',
        fullContent: '1 post full',
        user: 0,
    },
    {
        id: 2,
        smallContent: '2 post',
        fullContent: '2 post full',
        user: 0,
    },
    {
        id: 3,
        smallContent: '3 post',
        fullContent: '3 post full',
        user: 0,
    },
];

let newPost = 4;

const createPost = ( post: IPost ) => {
    const newPostObj = { ...post, id: newPost };
    posts.push( newPostObj );
    newPost++;
    return newPostObj;
}

const updatePost = ( id: IPostId, post: IPost ) => {
    const i = posts.findIndex( ({id: pid}) => pid === id );
    posts[i] = { ...posts[i], ...post, id };
    return posts[i];
}





export const createPostApi = ( token: string, post: IPost ) => {
    const userId = getUserFromSession( token );

    if( !userId )
        return new Error("Ошибка авторизации");

    const newPostObj = createPost( post );
    return newPostObj;
}

export const updatePostApi = ( token: string, post: IPost ) => {
    const userId = getUserFromSession( token );

    if( !userId )
        return new Error("Ошибка авторизации");

    if( userId !== post.user )
        return new Error("Это не ваш пост");

    return updatePost( post.id, post );
}
