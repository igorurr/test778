import * as React from "react";
import { connect } from "react-redux";

import Component from "../../components/TopBar";
import { leftBarOpen } from "../../actions/app";

interface IProps {
  leftBarOpen: () => void;
}

interface IState {
  lastScrollY: number;
  topBarHided: boolean;
}

class TopBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      lastScrollY: 0,
      topBarHided: false,
    };

    this.onScroll = this.onScroll.bind(this);
    this.updateTopBarHided = this.updateTopBarHided.bind(this);
    this.updateLastScrollY = this.updateLastScrollY.bind(this);
  }

  public render() {
    const { leftBarOpen } = this.props;
    const { topBarHided } = this.state;

    // импортим страницы: главная, юзер, блог главная, блог страница
    return <Component leftBarOpen={leftBarOpen} topBarHided={topBarHided} />;
  }

  private onScroll() {
    const { lastScrollY } = this.state;
    const dsy = window.scrollY - lastScrollY;

    this.updateLastScrollY();
    this.updateTopBarHided(dsy > 0);
  }

  private updateLastScrollY() {
    this.setState({ lastScrollY: window.scrollY });
  }

  private updateTopBarHided(value: boolean) {
    this.setState({ topBarHided: value });
  }

  public componentDidMount() {
    this.updateLastScrollY();
    window.addEventListener("scroll", this.onScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
}

export default connect(
  (state: any) => ({}),
  (dispatch: any) => ({
    leftBarOpen: () => dispatch(leftBarOpen()),
  }),
)(TopBar);
