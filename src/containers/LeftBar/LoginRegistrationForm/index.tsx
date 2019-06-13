import * as React from "react";
import { connect } from "react-redux";

import Component from "../../../components/LeftBar/LoginRegistrationForm";

import { login as loginAction, registration } from "../../../actions/user";
import { IUser } from "../../../types/user";

interface IProps {
  open: boolean;
  user: IUser;
  close: () => void;
  isLoading: boolean;
}

interface IState {
  typeAction: string;
  errors: {};
}

class LoginRegistrationForm extends React.Component<IProps, IState> {
  public formikData: any = null;

  constructor(props: IProps) {
    super(props);

    this.state = {
      typeAction: "login",
      errors: {},
    };
  }

  private getFormikRef(ref: any) {
    this.formikData = ref;
  }

  public static getDerrivedStateFromProps(
    {  }: IProps,
    { typeAction }: IState,
  ) {
    return {
      typeAction,
    };
  }

  public render() {
    const { isLoading } = this.props;

    // импортим страницы: главная, юзер, блог главная, блог страница
    return (
      <Component
        createHandleSubmit={this.createHandleSubmit}
        isLoading={isLoading}
        getFormikRef={this.getFormikRef}
      />
    );
  }

  public createHandleSubmit(action: string) {
    this.setState({ typeAction: action }, () => this.formikData.submitForm());
  }

  public handleSubmit(values: any) {
    const { login, registration } = this.props;

    if (values.typeAction === "login") {
      login(values.login, values.password);
    } else {
      registration(values);
    }

    /*this.props.kino.actions.login( values.email, values.password )
    .then( response => {
        this.setState( { isLoading: false } );
        redirect( 'user' );
    } )
    .catch( reason => {
        this.setState( { isLoading: false } );
        setErrors( reason )
    } )*/
  }

  public componentDidMount() {}
}

export default connect(
  (state: any) => {
    const { registrationAction, loginAction } = state.user;
    const curAction = loginAction || registrationAction;

    const status = curAction ? curAction.status : "pending";

    return {
      registrationAction,
      loginAction,
      isLoading: status === "pending" || status === "waiting",
    };
  },
  (dispatch: any) => ({
    login: (login: string, pass: string) => dispatch(loginAction(login, pass)),
    registration: (data: any) => dispatch(registration(data)),
  }),
)(LoginRegistrationForm);
