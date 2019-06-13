import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Component from "../../../components/Blog/Page";
import { getPost } from "../../../actions/blog";
import { IPostContent } from "../../../types/blog";

interface IProps {
  isLoading: boolean;
  post: IPostContent;
}

interface IState {}

class BlogPage extends React.Component<any, IState> {
  public render() {
    const { isLoading, post } = this.props;
    // импортим страницы: главная, юзер, блог главная, блог страница
    return <Component post={post} isLoading={isLoading} />;
  }

  public componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }
}

export default withRouter(connect(
  (state: any) => {
    const status = state.blog.getPostAction
      ? state.blog.getPostAction.status
      : "pending";

    return {
      isLoading: status === "pending" || status === "waiting",
      post: state.blog.postContent,
    };
  },
  (dispatch: any) => ({
    getPost: (id: number) => dispatch(getPost(id)),
  }),
)(BlogPage) as any);
