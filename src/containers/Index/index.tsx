import * as React from "react";
import { connect } from "react-redux";
import Component from "../../components/Index";

interface IProps {}

interface IState {}

class Index extends React.Component<IProps, IState> {
  public render() {
    // импортим страницы: главная, юзер, блог главная, блог страница
    return <Component />;
  }

  public componentDidMount() {}
}

export default connect(
  (state: any) => ({}),
  (dispatch: any) => ({}),
)(Index);
