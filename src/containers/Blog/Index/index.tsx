import * as React from "react";
import { connect } from "react-redux";

import Component from "../../../components/Blog/Index";
import { getPosts } from "../../../actions/blog";
import { IPost } from "../../../types/blog";

interface IProps {
  posts: IPost[];
  getPosts: () => void;
}

interface IState {}

class Blog extends React.Component<IProps, IState> {
  public render() {
    // импортим страницы: главная, юзер, блог главная, блог страница
    return <Component />;
  }

  public componentDidMount() {
    this.props.getPosts();
  }
}

export default connect(
  (state: any) => {
    const posts = state.blog.postsContent.posts;
    return {
      posts,
    };
  },
  (dispatch: any) => ({
    getPosts: () => dispatch(getPosts()),
  }),
)(Blog);
