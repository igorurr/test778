import * as React from "react";
import { connect } from "react-redux";

import Component from "../../components/LeftBar";

import { leftBarClose } from "../../actions/app";
import { logout as logoutAction } from "../../actions/user";
import { IUser } from "../../types/user";

interface IProps {
  open: boolean;
  user: IUser;
  close: () => void;
  logout: () => void;
  isLoading: boolean;
}

interface IState {}

class LeftBar extends React.Component<IProps, IState> {
  public render() {
    const { open, close, user, isLoading, logout } = this.props;

    // импортим страницы: главная, юзер, блог главная, блог страница
    return (
      <Component
        open={open}
        onClose={close}
        user={user}
        isLoading={isLoading}
        logout={logout}
      />
    );
  }

  public componentDidMount() {}
}

export default connect(
  (state: any) => {
    const status = state.user.getMeDataAction
      ? state.user.getMeDataAction.status
      : "pending";
    return {
      user: state.user.user,
      open: state.app.leftBarOpened,
      isLoading: status === "pending" || status === "waiting",
    };
  },
  (dispatch: any) => ({
    close: () => dispatch(leftBarClose()),
    logout: () => dispatch(logoutAction()),
  }),
)(LeftBar);
