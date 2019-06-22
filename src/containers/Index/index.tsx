import * as React from "react";
import { connect } from "react-redux";
import Component from "../../components/Index";
import IReduxState from "../../reducers/index.d";
import { IUser } from "../../types/user";

import opportunitiesData from "./opportunitiesData";

interface IState {}

interface IOuterProps {
  titleContent: React.ReactElement;
}

interface ICompStateProps {
  user: IUser;
}

interface ICompDispatchProps {}

type IProps = IOuterProps & ICompStateProps & ICompDispatchProps;

class Index extends React.Component<IProps, IState> {
  public render() {
    const { user } = this.props;
    return <Component opportunitiesData={opportunitiesData} user={user} />;
  }

  public componentDidMount() {}
}

export default connect(
  ({ user: { user } }: IReduxState): ICompStateProps => ({
    user,
  }),
  (dispatch: any): ICompDispatchProps => ({}),
)(Index);
