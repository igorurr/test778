import { getUserFromSession, findUser } from "./user";
import { IPostId } from "../../types/blog";
import { IPost } from "../types/blog";
import { createApiMethod } from "../helpers";

import { posts as initPosts } from "../initData";

const posts: IPost[] = [...initPosts];

let newPost = 23;

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
  const lastId = request.query.lastId ? Number(request.query.lastId) : null;
  const count = request.query.count ? Number(request.query.count) : 10;

  const i = lastId ? posts.findIndex(post => post.id === lastId) + 1 : 0;

  const resPosts = posts.slice(i, i + count).map(post => ({ ...post }));

  if (resPosts.length === 0)
    return [
      200,
      {
        posts: [],
        last: lastId,
        nextIsset: false,
      },
    ];

  const resLast = resPosts[resPosts.length - 1].id;

  return [
    200,
    {
      posts: resPosts.map(post => ({ ...post, user: findUser(post.user) })),
      last: resLast,
      nextIsset: resPosts.length === count,
    },
  ];
});

export const getPost = createApiMethod((request, response) => {
  const id = Number(request.params.id);

  const post = posts.find(post => post.id === id);

  if (!post) return [404, { error: "Такого поста не существует" }];

  return [200, { post: { ...post, user: findUser(post.user) } }];
});

export const createPostApi = createApiMethod((request, response) => {
  const { post } = request.query;
  const { token } = request.headers;

  const uid = getUserFromSession(token);

  if (!uid) return [403, { error: "Ошибка авторизации" }];

  return [200, { post: createPost(post) }];
});

export const updatePostApi = createApiMethod((request, response) => {
  const { post } = request.query;
  const { token } = request.headers;

  const uid = getUserFromSession(token);

  if (!uid) return [403, { error: "Ошибка авторизации" }];

  if (uid !== post.user) return [403, { error: "Это не ваш пост" }];

  return [200, { post: updatePost(post.id, post) }];
});
