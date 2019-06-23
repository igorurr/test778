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
  titleContent?: any;
}

class LeftBar extends React.Component<IProps, {}> {
  public render() {
    const { close, ...props } = this.props;
    return <Component {...props} onClose={close} />;
  }
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
