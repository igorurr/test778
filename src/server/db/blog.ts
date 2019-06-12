import { getUserFromSession } from "./user";
import { IPost, IPostId } from "../../types/blog";
import { createApiMethod } from "../helpers";

// пример данного "бэкенда" не претендует на роль продуктового
// и был разработан с целью демонстрации работы фронта

const posts: IPost[] = [
  {
    id: 1,
    smallContent: "1 post",
    fullContent: "1 post full",
    user: 0,
  },
  {
    id: 2,
    smallContent: "2 post",
    fullContent: "2 post full",
    user: 0,
  },
  {
    id: 3,
    smallContent: "3 post",
    fullContent: "3 post full",
    user: 0,
  },
];

let newPost = 4;

const createPost = (post: IPost) => {
  const newPostObj = { ...post, id: newPost };
  posts.push(newPostObj);
  newPost++;
  return newPostObj;
};

const updatePost = (id: IPostId, post: IPost) => {
  const i = posts.findIndex(({ id: pid }) => pid === id);
  posts[i] = { ...posts[i], ...post, id };
  return posts[i];
};

export const getPosts = createApiMethod((request, response) => {
  const { last } = request.query;
  const count = request.query.count || 10;

  const i = last ? posts.findIndex(post => post.id === last) + 1 : 0;

  const resPosts = posts.slice(i, i + count);
  const resLast = resPosts[resPosts.length - 1].id;

  return [200, { posts: resPosts, last: resLast }];
});

export const getPost = createApiMethod((request, response) => {
  const { id } = request.query;

  const post = posts.find(post => post.id === id);

  if (!post) {
    return [404, { error: "Такого поста не существует" }];
  }

  return [200, { post }];
});

export const createPostApi = createApiMethod((request, response) => {
  const { token, post } = request.query;

  const uid = getUserFromSession(token);

  if (!uid) {
    return [403, { error: "Ошибка авторизации" }];
  }

  return [200, { post: createPost(post) }];
});

export const updatePostApi = createApiMethod((request, response) => {
  const { token, post } = request.query;

  const uid = getUserFromSession(token);

  if (!uid) {
    return [403, { error: "Ошибка авторизации" }];
  }

  if (uid !== post.user) {
    return [403, { error: "Это не ваш пост" }];
  }

  return [200, { post: updatePost(post.id, post) }];
});
