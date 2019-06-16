import * as React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps, Redirect } from "react-router";

import { getUserData as getUserDataAction } from "../../actions/user";

import IReduxState from "../../reducers/index.d";
import { IUser } from "../../server/types/user";
import { IGetUserAction } from "../../types/user";
import routes from "../App/routes";

import Component from "../../components/User";

interface IOuterProps {}

interface IState {
  wasError: boolean;
  isAuth: boolean;
  isMy: boolean;
  isLoading: boolean;
  user: IUser;
}

interface ICompStateProps {
  user: IUser;
  getUserAction: IGetUserAction;
}

interface ICompDispatchProps {
  getUserData: (id: number) => void;
}

interface IRouterPageProps {
  id?: string;
}

type IProps = IOuterProps &
  RouteComponentProps<IRouterPageProps> &
  ICompStateProps &
  ICompDispatchProps;

class User extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      wasError: false,
      isAuth: Number(props.user.id) !== 0,
      isMy: this.getPageUser() === Number(props.user.id),
      isLoading: true,
      user: {} as IUser,
    };
    console.log(this.state, props);
  }

  public render() {
    const { isAuth, wasError, ...props } = this.state;
    if (!isAuth || wasError) return <Redirect to={routes.index.link()} />;

    return <Component {...props} />;
  }

  private getPageUser() {
    const {
      match: {
        params: { id },
      },
      user: { id: myId },
    } = this.props;

    console.log(id, myId);

    return id ? Number(id) : myId;
  }

  private getUser() {
    const { getUserData } = this.props;
    const { isMy } = this.state;

    if (!isMy) getUserData(this.getPageUser());
  }

  public static getDerrivedStateFromProps(
    { getUserAction: { status, user: anotherUser }, user }: IProps,
    { isMy }: IState,
  ) {
    const isLoading = !isMy && (status === "pending" || status === "waiting");
    console.log(isLoading);
    return {
      isLoading,
      wasError: !isMy && !isLoading && status === "error",
      user: isMy ? user : isLoading ? {} : anotherUser,
    };
  }

  public componentDidMount() {
    this.getUser();
  }
}

export default connect(
  (state: IReduxState): ICompStateProps => ({
    user: (console.log(state) as any) || (state.user.user as IUser),
    getUserAction: state.user.getUserAction,
  }),
  (dispatch: any): ICompDispatchProps => ({
    getUserData: (id: number) => dispatch(getUserDataAction(id)),
  }),
)(withRouter<IProps>(User));
