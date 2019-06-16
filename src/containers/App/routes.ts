import BlogPage from "../Blog/Page";
import Blog from "../Blog/Index";
import User from "../User";
import Index from "../Index";

export default {
  blogPostCreate: {
    route: "/blog/post/create",
    link: () => "/blog/post/create",
    component: BlogPage,
  },
  blogPost: {
    route: "/blog/post/:id",
    link: (id: number | string) => `/blog/post/${id}`,
    component: BlogPage,
  },
  blog: {
    route: "/blog",
    link: () => "/blog",
    component: Blog,
  },
  user: {
    route: "/user/:id",
    link: (id: number | string) => `/user/${id}`,
    component: User,
  },
  userMy: {
    route: "/user",
    link: () => "/user",
    component: User,
  },
  index: {
    route: "/",
    link: () => "/",
    component: Index,
  },
};
