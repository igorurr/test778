import db from "./db";
import express from "express";

import { serverRoute, responseNotFound } from "./helpers";

// пример данного "бэкенда" не претендует на роль продуктового
// и был разработан с целью демонстрации работы фронта

const app = express();

const version = "1";
const apiBase = `/api/v${version}`;

serverRoute(app, `${apiBase}/user/session`, {
  post: db.user.login,
});

serverRoute(app, `${apiBase}/user/:id`, {
  get: db.user.getData,
});

serverRoute(app, `${apiBase}/user/`, {
  get: db.user.getMeData,
  post: db.user.registration,
  patch: db.user.updateUserApi,
});

serverRoute(app, `${apiBase}/blog/post/:id`, {
  get: db.blog.getPost,
  patch: db.blog.updatePostApi,
});

serverRoute(app, `${apiBase}/blog/post/`, {
  post: db.blog.createPostApi,
});

serverRoute(app, `${apiBase}/blog`, {
  get: db.blog.getPosts,
});

app.all("*", responseNotFound);

app.listen(3200, () => {
  console.log("Example server listening on port 3200!");
});
