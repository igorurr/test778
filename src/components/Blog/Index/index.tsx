import * as React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SentimentVeryDissatisfied from "@material-ui/icons/SentimentVeryDissatisfied";

import Page from "../../Page";

import Post from "../../../containers/Blog/Index/Post";

import { IPost } from "../../../types/blog";

import BlogMessage from "./BlogMessage";

import "./index.scss";

interface IProps {
  posts: IPost[];
  isLoading: boolean;
  nextIsset: boolean;
}

const Blog = ({ posts, isLoading, nextIsset }: IProps) => (
  <Page
    title="Блог"
    titleContent={<span>{`Блог ${isLoading ? " - загрузка" : ""}`}</span>}
  >
    <article className="blog-index">
      {posts.map(post => (
        <article key={post.id} className="blog-index-item">
          <Post post={post} />
        </article>
      ))}
      {isLoading && <BlogMessage message="Загрузка" />}
      {!nextIsset && (
        <BlogMessage message="Больше у нас постов нет, к сожалению" />
      )}
    </article>
  </Page>
);

export default Blog;
