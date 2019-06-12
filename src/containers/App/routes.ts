import BlogPage from "../Blog/Page";
import Blog from "../Blog/Index";
import User from "../User";
import Index from "../Index";

export default {
  blogPage: {
    route: "/blog/:id",
    component: BlogPage,
  },
  blog: {
    route: "/blog",
    component: Blog,
  },
  user: {
    route: "/user",
    component: User,
  },
  index: {
    route: "/",
    component: Index,
  },
};
