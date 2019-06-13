import * as React from "react";
import { connect } from "react-redux";

import Component from "../../../components/Blog/Index";
import { getPosts } from "../../../actions/blog";
import { IPost } from "../../../types/blog";

const MAX_BOTTOM_OFFSET = 200;

interface IProps {
  posts: IPost[];
  isLoading: boolean;
  nextIsset: boolean;
  getPosts: () => void;
}

interface IState {}

class Blog extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};

    this.onScroll = this.onScroll.bind(this);
  }

  public render() {
    const { posts, isLoading, nextIsset } = this.props;

    // импортим страницы: главная, юзер, блог главная, блог страница
    return <Component posts={posts} isLoading={isLoading} />;
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

  public componentDidMount() {
    this.props.getPosts();
    window.addEventListener("scroll", this.onScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
}

export default connect(
  (state: any) => {
    const {
      postsContent: { posts, nextIsset },
      getPostsAction,
    } = state.blog;
    const status = getPostsAction ? getPostsAction.status : "pending";
    console.log(status);
    return {
      posts,
      nextIsset,
      isLoading: status === "pending" || status === "waiting",
    };
  },
  (dispatch: any) => ({
    getPosts: () => dispatch(getPosts()),
  }),
)(Blog);
