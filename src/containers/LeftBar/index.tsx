import * as React from "react";
import { connect } from "react-redux";

import Component from "../../components/LeftBar";

import { leftBarClose } from "../../actions/app";

interface IProps {
  open: boolean;
  close: () => void;
}

interface IState {}

class LeftBar extends React.Component<IProps, IState> {
  public render() {
    const { open, close } = this.props;

    // импортим страницы: главная, юзер, блог главная, блог страница
    return <Component open={open} onClose={close} />;
  }

  public componentDidMount() {}
}

export default connect(
  (state: any) => ({
    open: state.app.leftBarOpened,
  }),
  (dispatch: any) => ({
    close: () => dispatch(leftBarClose()),
  }),
)(LeftBar);
