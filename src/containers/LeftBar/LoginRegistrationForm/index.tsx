import * as React from "react";
import { connect } from "react-redux";
import * as yup from "yup";
import {
  Formik,
  FormikProps,
  FormikErrors,
  FormikActions,
  FormikValues,
} from "formik";

import Comp from "../../../components/LeftBar/LoginRegistrationForm";

import { login as loginAction, registration } from "../../../actions/user";

import { IRequestLoader } from "../../../types/common";
import { IRegistrationAction, ILoginAction, IUser } from "../../../types/user";

interface IFormValues extends FormikValues {
  login: string;
  password: string;
}

interface IProps {
  login: (login: string, password: string) => void;
  registration: (data: IUser) => void;
  registrationAction: IRegistrationAction;
  loginAction: ILoginAction;
}

interface IState {
  typeAction: string;
  isLoading: boolean;
}

const validationSchema = yup.object().shape({
  login: yup.string().required("Поле не должно быть пустым"),
  password: yup.string().required("Поле не должно быть пустым"),
});

const initialValues = {
  login: "",
  password: "",
};

class LoginRegistrationForm extends React.Component<IProps, IState> {
  private form?: FormikProps<IFormValues> = undefined;

  constructor(props: IProps) {
    super(props);

    this.createHandleSubmit = this.createHandleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      typeAction: "login",
      isLoading: false,
    };
  }

  public handleSubmit(
    { login: loginVal, password }: IFormValues,
    actions: FormikActions<IFormValues>,
  ) {
    const { login, registration } = this.props;
    const { typeAction } = this.state;

    if (typeAction === "login") login(loginVal, password);

    if (typeAction === "registration")
      registration({
        login: loginVal,
        password,
        email: "",
        phone: "",
        firstName: "",
        secondName: "",
        thirdName: "",
      });
  }

  public createHandleSubmit(action: string) {
    return () =>
      this.setState(
        { typeAction: action },
        () => this.form && this.form.handleSubmit(),
      );
  }

  public static getDerrivedStateFromProps(
    { registrationAction, loginAction }: IProps,
    { typeAction }: IState,
  ) {
    return {
      isLoading:
        typeAction === "login"
          ? loginAction && loginAction.status === "waiting"
          : registrationAction && registrationAction.status === "waiting",
    };
  }

  public checkUpdateErrors(
    oldAction: IRequestLoader,
    newAction: IRequestLoader,
  ) {
    console.log(this.form, oldAction, newAction);
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
        this.form.setErrors(newAction.error as FormikErrors<IFormValues>);
  }

  public componentDidUpdate(
    { registrationAction, loginAction }: IProps,
    { typeAction }: IState,
  ) {
    if (typeAction === "login")
      this.checkUpdateErrors(loginAction, this.props.loginAction);
    else
      this.checkUpdateErrors(registrationAction, this.props.registrationAction);
  }

  public render() {
    const { isLoading } = this.state;

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
        validateOnChange={false}
        render={({
          values,
          touched,
          dirty,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          setErrors,
          setFieldValue,
          setFieldTouched,
          isSubmitting,
          isValidating,
          submitCount,
          setStatus,
          setError,
          setSubmitting,
          validateField,
          resetForm,
          submitForm,
          setFormikState,
          setTouched,
          setValues,
          setFieldError,
          validateForm,
          isValid,
          initialValues,
          ...props
        }) => {
          this.form = {
            values,
            touched,
            dirty,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setErrors,
            setFieldValue,
            setFieldTouched,
            isValid,
            initialValues,
            isSubmitting,
            isValidating,
            submitCount,
            setStatus,
            setError,
            setSubmitting,
            validateField,
            resetForm,
            submitForm,
            setFormikState,
            setTouched,
            setValues,
            setFieldError,
            validateForm,
          } as FormikProps<IFormValues>;

          return (
            <Comp
              {...props}
              isLoading={isLoading}
              form={this.form as FormikProps<IFormValues>}
              createHandleSubmit={this.createHandleSubmit}
            />
          );
        }}
      />
    );
  }
}

export default connect(
  (state: any) => {
    const { registrationAction, loginAction } = state.user;

    return {
      registrationAction,
      loginAction,
    };
  },
  (dispatch: any) => ({
    login: (login: string, pass: string) => dispatch(loginAction(login, pass)),
    registration: (data: IUser) => dispatch(registration(data)),
  }),
)(LoginRegistrationForm);
