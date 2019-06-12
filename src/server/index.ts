import db from "./db";
import express from "express";

import { serverRoute } from "./helpers";

const app = express();

const version = "1";
const apiBase = `/api/v${version}`;

serverRoute(app, `${apiBase}/user/session`, {
  post: db.user.login,
});

serverRoute(app, `${apiBase}/user/`, {
  get: db.user.getMeData,
  post: db.user.registration,
  path: db.user.updateUserApi,
});

serverRoute(app, `${apiBase}/blog/post`, {
  get: db.blog.getPost,
  post: db.blog.createPostApi,
  path: db.blog.updatePostApi,
});

serverRoute(app, `${apiBase}/blog`, {
  get: db.blog.getPosts,
});

app.listen(3200, function() {
  console.log("Example server listening on port 3200!");
});
