import * as React from "react";

import Page from "../../Page";

import Post from "../../../containers/Blog/Index/Post";

import { IPost } from "../../../types/blog";

import "./index.scss";

interface IProps {
  posts: IPost[];
  isLoading: boolean;
}

const Blog = ({ posts, isLoading }: IProps) => (
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
      {isLoading && (
        <article className="blog-index-loading">
          <p>Загрузка</p>
        </article>
      )}
    </article>
  </Page>
);

export default Blog;
