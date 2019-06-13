import * as React from "react";

import Page from "../../Page";

import Post from "./Post";

import { IPost } from "../../../types/blog";

import "./index.scss";

interface IProps {
  posts: IPost[];
  isLoading: boolean;
}

const Blog = ({ posts, isLoading }: IProps) => (
  <Page title="Блог">
    <article className="blog-index">
      {posts.map(post => (
        <article className="blog-index-item">
          <Post post={post} />
        </article>
      ))}
      {isLoading && (
        <article className="blog-index-loading">
          <p>Загрузка</p>
        </article>
      )}
    </article>
  </Page>
);

export default Blog;
