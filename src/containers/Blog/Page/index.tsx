import * as React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";

import Component from "../../../components/Blog/Page";
import { getPost } from "../../../actions/blog";
import { IPost } from "../../../types/blog";
import { IUser } from "../../../server/types/user";

interface ICompStateProps {
  isLoading: boolean;
  user: IUser;
  post: IPost;
}

interface ICompDispatchProps {
  getPost: (id: number) => void;
}

interface IRouterPageProps {
  id?: string;
}

type IProps = RouteComponentProps<IRouterPageProps> &
  ICompStateProps &
  ICompDispatchProps;

class BlogPage extends React.Component<IProps, {}> {
  public render() {
    const { isLoading, post, user } = this.props;
    // импортим страницы: главная, юзер, блог главная, блог страница
    return <Component post={post} isLoading={isLoading} user={user} />;
  }

  public componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(Number(id));
  }
}

export default withRouter<{} & RouteComponentProps<IRouterPageProps>>(
  connect(
    (state: any): ICompStateProps => {
      const status = state.blog.getPostAction
        ? state.blog.getPostAction.status
        : "pending";

      return {
        isLoading: status === "pending" || status === "waiting",
        user: state.user.user,
        post: state.blog.postContent,
      };
    },
    (dispatch: any): ICompDispatchProps => ({
      getPost: (id: number) => dispatch(getPost(id)),
    }),
  )(BlogPage),
);
