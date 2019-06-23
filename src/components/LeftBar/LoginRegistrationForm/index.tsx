import * as React from "react";

import { FormikProps, FormikValues } from "formik";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";

interface IFormValues extends FormikValues {
  login: string;
  password: string;
}

type TypeAction = "login" | "registration";

interface IProps {
  createHandleSubmit: (action: TypeAction) => () => void;
  isLoading: boolean;
  form: FormikProps<IFormValues>;
  typeAction: TypeAction;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: 7,
    },
    btnWrapper: {
      margin: theme.spacing(1),
      position: "relative",
    },
    buttonProgress: {
      color: green[500],
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
    userCard: {
      display: "flex",
    },
    userLogin: {
      lineHeight: 39,
      marginLeft: 14,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

const LoginRegistrationForm = ({
  createHandleSubmit,
  isLoading,
  typeAction,
  form,
}: IProps) => {
  const classes = useStyles();

  return (
    <form>
      <Card className={classes.card}>
        <CardContent>
          {form.errors && form.errors.error && <p>{form.errors.error}</p>}
          <TextField
            disabled={isLoading}
            label={form.errors.login || "Login"}
            className={classes.textField}
            margin="normal"
            error={Boolean(form.errors.login)}
            name="login"
            onChange={form.handleChange}
            value={form.values.login}
            InputLabelProps={Boolean(form.errors.login) ? { shrink: true } : {}}
          />
          <TextField
            disabled={isLoading}
            label={form.errors.password || "Password"}
            className={classes.textField}
            margin="normal"
            error={Boolean(form.errors.password)}
            type="password"
            name="password"
            onChange={form.handleChange}
            value={form.values.password}
            InputLabelProps={
              Boolean(form.errors.password) ? { shrink: true } : {}
            }
          />
        </CardContent>
        <CardActions>
          <div className={classes.btnWrapper}>
            <Button
              disabled={isLoading}
              size="small"
              color="primary"
              onClick={createHandleSubmit("login")}
            >
              Login
            </Button>
            {isLoading && typeAction === "login" && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
          <div className={classes.btnWrapper}>
            <Button
              disabled={isLoading}
              size="small"
              color="primary"
              onClick={createHandleSubmit("registration")}
            >
              Registration
            </Button>
            {isLoading && typeAction === "registration" && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </CardActions>
      </Card>
    </form>
  );
};

export default LoginRegistrationForm;
