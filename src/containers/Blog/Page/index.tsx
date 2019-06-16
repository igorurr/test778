import * as React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";

import Component from "../../../components/Blog/Page";
import { getPost } from "../../../actions/blog";
import { IPostContent } from "../../../types/blog";

interface IOuterProps {}

interface IState {}

interface ICompStateProps {
  isLoading: boolean;
  post: IPostContent;
}

interface ICompDispatchProps {
  getPost: (id: number) => void;
}

interface IRouterPageProps {
  id?: string;
}

type IProps = IOuterProps &
  RouteComponentProps<IRouterPageProps> &
  ICompStateProps &
  ICompDispatchProps;

class BlogPage extends React.Component<IProps, IState> {
  public render() {
    const { isLoading, post } = this.props;
    // импортим страницы: главная, юзер, блог главная, блог страница
    return <Component post={post} isLoading={isLoading} />;
  }

  public componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(Number(id));
  }
}

export default withRouter<IOuterProps & RouteComponentProps<IRouterPageProps>>(
  connect(
    (state: any): ICompStateProps => {
      const status = state.blog.getPostAction
        ? state.blog.getPostAction.status
        : "pending";

      return {
        isLoading: status === "pending" || status === "waiting",
        post: state.blog.postContent,
      };
    },
    (dispatch: any): ICompDispatchProps => ({
      getPost: (id: number) => dispatch(getPost(id)),
    }),
  )(BlogPage),
);
