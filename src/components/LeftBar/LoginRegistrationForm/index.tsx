import * as React from "react";

import * as yup from "yup";
import { FormikProps, FormikErrors, FormikActions, FormikValues } from "formik";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import cn from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import CardActionArea from "@material-ui/core/CardActionArea";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Drawer from "@material-ui/core/Drawer";

interface IFormValues extends FormikValues {
  login: string;
  password: string;
}

interface IProps {
  createHandleSubmit: (action: string) => () => void;
  isLoading: boolean;
  form: FormikProps<IFormValues>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: 7,
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
  form,
}: IProps) => {
  const classes = useStyles();

  return !isLoading ? (
    <form>
      <Card className={classes.card}>
        <CardContent>
          {form.errors && form.errors.error && <p>{form.errors.error}</p>}
          <TextField
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
          <Button
            size="small"
            color="primary"
            onClick={createHandleSubmit("login")}
          >
            Login
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={createHandleSubmit("registration")}
          >
            Registration
          </Button>
        </CardActions>
      </Card>
    </form>
  ) : (
    <p>Загрузка</p>
  );
};

export default LoginRegistrationForm;
