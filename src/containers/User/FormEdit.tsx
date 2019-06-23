import * as React from "react";
import { connect } from "react-redux";
import * as yup from "yup";
import { Formik, FormikProps, FormikActions, FormikValues } from "formik";

import Comp from "../../components/User/FormEdit";

import { IRequestLoader } from "../../types/common";
import { IUpdateAccountAction, IUser, IUserEditForm } from "../../types/user";
import IReduxState from "../../reducers/index.d";
import { updateAccount } from "../../actions/user";

interface IFormValues extends FormikValues, IUserEditForm {}

interface ICompStateProps {
  user: IUser;
  isLoading: boolean;
  updateAccountAction: IUpdateAccountAction;
}

interface ICompDispatchProps {
  update: (data: IFormValues) => void;
}

type IProps = ICompStateProps & ICompDispatchProps;

const validationSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Пусто")
    .matches(/^\+?([0-9]{10,11})$/, "Неверный телефон"),
  firstName: yup.string().required("Пусто"),
  secondName: yup.string().required("Пусто"),
  thirdName: yup.string().required("Пусто"),
});

class FormEdit extends React.Component<IProps, {}> {
  private form?: FormikProps<IFormValues>;

  constructor(props: IProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formikRender = this.formikRender.bind(this);

    this.state = {
      isLoading: false,
    };
  }

  public handleSubmit(data: IFormValues, actions: FormikActions<IFormValues>) {
    const { update } = this.props;
    update(data);
  }

  public getInitialValues() {
    const { phone, firstName, secondName, thirdName } = this.props.user;
    return {
      phone,
      firstName,
      secondName,
      thirdName,
    };
  }

  public checkUpdateErrors(
    oldAction: IRequestLoader,
    newAction: IRequestLoader,
  ) {
    /*
        если обоих не существует не обновляем
        если оба существует но не существует ошибок тоже не обновляем
        если существует только один по любому надо обновить
      */
    if (
      (!oldAction && !newAction) ||
      (oldAction && newAction && !oldAction.error && !newAction.error)
    )
      return;
    if (!oldAction || !newAction || !oldAction.error || !newAction.error)
      this.form &&
        this.form.setErrors(
          newAction ? (newAction.error ? newAction.error : {}) : {},
        );

    /*
        если есть оба, обновляем если: не равно количество ключей
        или если значение каждого старого ключа не равно значению такого же нового
      */
    if (
      Object.keys(oldAction.error || {}).length !==
        Object.keys(newAction.error || {}).length ||
      !Object.keys(newAction.error || {}).reduce(
        (acc: boolean, key: string) =>
          acc &&
          ((oldAction as any).error[key] as string) ===
            ((newAction as any).error[key] as string),
        true,
      )
    )
      this.form &&
        this.form.setErrors(
          newAction ? (newAction.error ? newAction.error : {}) : {},
        );
  }

  public componentDidUpdate({ updateAccountAction }: IProps) {
    this.checkUpdateErrors(updateAccountAction, this.props.updateAccountAction);
  }

  public formikRender(props: FormikProps<IFormValues>) {
    const { user, isLoading } = this.props;
    this.form = props;
    return <Comp isLoading={isLoading} form={props} user={user} />;
  }

  public render() {
    return (
      <Formik
        initialValues={this.getInitialValues()}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
        validateOnChange={false}
        render={this.formikRender}
      />
    );
  }
}

export default connect(
  (state: IReduxState): ICompStateProps => {
    const { user, updateAccountAction } = state.user;

    return {
      user,
      isLoading:
        updateAccountAction && updateAccountAction.status === "pending",
      updateAccountAction,
    };
  },
  (dispatch: any): ICompDispatchProps => ({
    update: (data: IFormValues) => dispatch(updateAccount(data)),
  }),
)(FormEdit);
