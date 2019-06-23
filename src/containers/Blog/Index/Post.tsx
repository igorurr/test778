import * as React from "react";
import { connect } from "react-redux";

import Component from "../../../components/Blog/Index/Post";
import { push } from "connected-react-router";
import routes from "../../App/routes";
import { IPost } from "../../../types/blog";

interface IOuterProps {
  post: IPost;
}

interface ICompDispatchProps {
  goToPost: () => void;
}

type IProps = IOuterProps & ICompDispatchProps;

class Post extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  public goToPostPath() {
    return routes.blogPost.link(this.props.post.id as number);
  }

  public render() {
    const { post, goToPost } = this.props;

    // импортим страницы: главная, юзер, блог главная, блог страница
    return (
      <Component
        post={post}
        goToPost={goToPost}
        goToPostPath={this.goToPostPath()}
      />
    );
  }
}

export default connect(
  null,
  (dispatch: any, ownProps: IOuterProps): ICompDispatchProps => ({
    goToPost: () =>
      dispatch(push(routes.blogPost.link(ownProps.post.id as number))),
  }),
)(Post);
