import * as React from "react";
import { connect } from "react-redux";

import { getMeData } from "../../actions/user";

import PageLoading from "../../components/PageLoading";

interface IProps {
  userLoaded: boolean;
  children: React.ReactChild;
  getMeData: () => void;
}

interface IState {}

class PayLoader extends React.Component<IProps, IState> {
  public render() {
    const { userLoaded } = this.props;
    if (!userLoaded) return <PageLoading />;
    return this.props.children;
  }

  public componentDidMount() {
    this.props.getMeData();
  }
}

export default connect(
  (state: any) => {
    const status = state.user.getMeDataAction.status;
    return {
      userLoaded: status !== "pending" && status !== "waiting",
    };
  },
  (dispatch: any) => ({
    getMeData: () => dispatch(getMeData()),
  }),
)(PayLoader);
