import * as React from "react";
import { connect } from "react-redux";
import Component from "../../components/Index";
import IReduxState from "../../reducers/index.d";
import { IUser } from "../../types/user";

import opportunitiesData from "./opportunitiesData";

interface IOuterProps {
  titleContent: React.ReactElement;
}

interface ICompStateProps {
  user: IUser;
}

type IProps = IOuterProps & ICompStateProps;

class Index extends React.Component<IProps, {}> {
  public render() {
    const { user } = this.props;
    return <Component opportunitiesData={opportunitiesData} user={user} />;
  }
}

export default connect(
  ({ user: { user } }: IReduxState): ICompStateProps => ({
    user,
  }),
)(Index);
