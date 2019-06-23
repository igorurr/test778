import * as React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import Component from "../../components/TopBar";
import { leftBarOpen } from "../../actions/app";
import IReduxState from "../../reducers/index.d";
import { IUser } from "../../types/user";
import routes from "../App/routes";

interface IState {
  lastScrollY: number;
  topBarHided: boolean;
}

interface IOuterProps {
  titleContent?: any;
  rightContent?: any;
}

interface ICompStateProps {
  user: IUser;
}

interface ICompDispatchProps {
  leftBarOpen: () => void;
  goHome: () => void;
  goUser: () => void;
}

type IProps = IOuterProps & ICompStateProps & ICompDispatchProps;

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
    const {
      leftBarOpen,
      user,
      titleContent,
      goHome,
      goUser,
      rightContent,
    } = this.props;
    const { topBarHided } = this.state;

    return (
      <Component
        leftBarOpen={leftBarOpen}
        topBarHided={topBarHided}
        titleContent={titleContent}
        user={user}
        goUser={goUser}
        goHome={goHome}
        rightContent={rightContent}
      />
    );
  }

  public componentDidMount() {
    this.updateLastScrollY();
    window.addEventListener("scroll", this.onScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
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
}

export default connect(
  ({ user: { user } }: IReduxState): ICompStateProps => ({
    user,
  }),
  (dispatch: any): ICompDispatchProps => ({
    leftBarOpen: () => dispatch(leftBarOpen()),
    goHome: () => dispatch(push(routes.index.link())),
    goUser: () => dispatch(push(routes.userMy.link())),
  }),
)(TopBar);
