import * as React from "react";

import { withRouter, RouteComponentProps } from "react-router";

import Component from "../../../components/LeftBar/UserCard";

import routes from "../../App/routes";

import { IUser } from "../../../types/user";

interface IProps {
  user: IUser;
  logout: () => void;
}

type IWithrouterProps = IProps & RouteComponentProps<{}>;

class UserCard extends React.Component<IWithrouterProps, {}> {
  constructor(props: IWithrouterProps) {
    super(props);

    this.goToUser = this.goToUser.bind(this);
  }

  public render() {
    const { user, logout } = this.props;
    return <Component user={user} logout={logout} goToUser={this.goToUser} />;
  }

  private goToUser() {
    const { history } = this.props;
    history.push(routes.userMy.link());
  }
}

export default withRouter<IWithrouterProps>(UserCard);
