import * as React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";

import IReduxState from "../../../reducers/index.d";

import Component from "../../../components/Blog/Index";
import { getPosts } from "../../../actions/blog";
import { IPost } from "../../../types/blog";

const MAX_BOTTOM_OFFSET = 200;

interface ICompStateProps {
  posts: IPost[];
  isLoading: boolean;
  nextIsset: boolean;
}

interface ICompDispatchProps {
  getPosts: () => void;
}

type IProps = RouteComponentProps<{}> & ICompStateProps & ICompDispatchProps;

class Blog extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);

    this.state = {};

    this.onScroll = this.onScroll.bind(this);
  }

  public render() {
    const { posts, isLoading, nextIsset } = this.props;

    // импортим страницы: главная, юзер, блог главная, блог страница
    return (
      <Component posts={posts} nextIsset={nextIsset} isLoading={isLoading} />
    );
  }

  public componentDidMount() {
    this.props.getPosts();
    window.addEventListener("scroll", this.onScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  private onScroll() {
    const dsy =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight -
      document.documentElement.scrollTop;

    const { isLoading, nextIsset } = this.props;

    if (!isLoading && nextIsset && dsy < MAX_BOTTOM_OFFSET)
      this.props.getPosts();
  }
}

export default connect(
  (state: IReduxState): ICompStateProps => {
    const {
      postsContent: { posts, nextIsset },
      getPostsAction,
    } = state.blog;
    const status = getPostsAction ? getPostsAction.status : "pending";
    return {
      posts,
      nextIsset,
      isLoading: status === "pending" || status === "waiting",
    };
  },
  (dispatch: any): ICompDispatchProps => ({
    getPosts: () => dispatch(getPosts()),
  }),
)(withRouter<IProps>(Blog));
