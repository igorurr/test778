import * as React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps, Redirect } from "react-router";

import { getUserData as getUserDataAction } from "../../actions/user";

import IReduxState from "../../reducers/index.d";
import { IGetUserAction, IUpdateAccountAction, IUser } from "../../types/user";
import routes from "../App/routes";

import Component from "../../components/User";

interface IState {
  wasError: boolean;
  isAuth: boolean;
  isMy: boolean;
  isLoading: boolean;
  user: IUser;
  isEditing: boolean;
}

interface ICompStateProps {
  user: IUser;
  getUserAction: IGetUserAction;
  updateAccountAction: IUpdateAccountAction;
}

interface ICompDispatchProps {
  getUserData: (id: number) => void;
}

interface IRouterPageProps {
  id?: string;
}

type IProps = RouteComponentProps<IRouterPageProps> &
  ICompStateProps &
  ICompDispatchProps;

class User extends React.Component<IProps, IState> {
  public static getDerivedStateFromProps(
    { getUserAction: { status, user: anotherUser }, user }: IProps,
    { isMy }: IState,
  ) {
    const isLoading = !isMy && (status === "pending" || status === "waiting");

    return {
      isLoading,
      isAuth: Number(user.id) !== 0,
      wasError: !isMy && !isLoading && status === "error",
      user: isMy ? user : isLoading ? {} : anotherUser,
    };
  }
  constructor(props: IProps) {
    super(props);

    this.toggleEdit = this.toggleEdit.bind(this);

    this.state = {
      wasError: false,
      isAuth: Number(props.user.id) !== 0,
      isMy: this.getPageUser() === Number(props.user.id),
      isLoading: true,
      user: {
        id: 0,
        login: "",
        password: "",
        email: "",
        phone: "",
        firstName: "",
        secondName: "",
        thirdName: "",
      },
      isEditing: false,
    };
  }

  public render() {
    const { isAuth, wasError, ...props } = this.state;

    if (!isAuth || wasError) return <Redirect to={routes.index.link()} />;

    return <Component toggleEdit={this.toggleEdit} {...props} />;
  }

  public checkUpdateAction(
    oldAction: IUpdateAccountAction,
    newAction: IUpdateAccountAction,
  ) {
    if (
      newAction &&
      newAction.status === "success" &&
      oldAction &&
      oldAction.status !== "success"
    )
      this.setState({ isEditing: false });
  }

  public componentDidUpdate({ updateAccountAction: oldAction }: IProps) {
    const { updateAccountAction: newAction } = this.props;

    this.checkUpdateAction(oldAction, newAction);
  }

  public componentDidMount() {
    this.getUser();
  }

  private toggleEdit() {
    this.setState(({ isEditing }) => ({ isEditing: !isEditing }));
  }

  private getPageUser() {
    const {
      match: {
        params: { id },
      },
      user: { id: myId },
    } = this.props;

    return id ? Number(id) : myId ? Number(myId) : 0;
  }

  private getUser() {
    const { getUserData } = this.props;
    const { isMy } = this.state;

    if (!isMy) getUserData(this.getPageUser());
  }
}

export default connect(
  (state: IReduxState): ICompStateProps => ({
    user: state.user.user,
    getUserAction: state.user.getUserAction,
    updateAccountAction: state.user.updateAccountAction,
  }),
  (dispatch: any): ICompDispatchProps => ({
    getUserData: (id: number) => dispatch(getUserDataAction(id)),
  }),
)(withRouter<IProps>(User));
