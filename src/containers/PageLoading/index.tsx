import * as React from "react";
import { connect } from "react-redux";

import { getMeData } from "../../actions/user";

import Component from "../../components/PageLoading";

interface IProps {
  userLoaded: boolean;
  children: React.ReactChild;
  getMeData: () => void;
}

class PageLoading extends React.Component<IProps, {}> {
  public render() {
    const { userLoaded } = this.props;
    if (!userLoaded) return <Component />;
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
)(PageLoading);
