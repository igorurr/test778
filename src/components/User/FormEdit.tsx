import * as React from "react";

import { FormikProps, FormikValues } from "formik";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { IUserEditForm, IUser } from "../../types/user";

interface IFormValues extends FormikValues, IUserEditForm {}

interface IProps {
  isLoading: boolean;
  user: IUser;
  form: FormikProps<IFormValues>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "7px auto",
      maxWidth: 900,
      overflowX: "auto",
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

const FormEdit = ({ isLoading, form, user }: IProps) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <form>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell key="h1">Данные пользователя:</TableCell>
              <TableCell key="h2">Значение:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={"firstName"}>
              <TableCell component="th" scope="row">
                Имя
              </TableCell>
              <TableCell align="center">
                <TextField
                  disabled={isLoading}
                  label={form.errors.firstName}
                  className={classes.textField}
                  margin="normal"
                  error={Boolean(form.errors.firstName)}
                  name="firstName"
                  onChange={form.handleChange}
                  value={form.values.firstName}
                />
              </TableCell>
            </TableRow>
            <TableRow key="secondName">
              <TableCell component="th" scope="row">
                Фамилия
              </TableCell>
              <TableCell align="center">
                <TextField
                  disabled={isLoading}
                  label={form.errors.secondName}
                  className={classes.textField}
                  margin="normal"
                  error={Boolean(form.errors.secondName)}
                  name="secondName"
                  onChange={form.handleChange}
                  value={form.values.secondName}
                />
              </TableCell>
            </TableRow>
            <TableRow key="thirdName">
              <TableCell component="th" scope="row">
                Отчество
              </TableCell>
              <TableCell align="center">
                <TextField
                  disabled={isLoading}
                  label={form.errors.thirdName}
                  className={classes.textField}
                  margin="normal"
                  error={Boolean(form.errors.thirdName)}
                  name="thirdName"
                  onChange={form.handleChange}
                  value={form.values.thirdName}
                />
              </TableCell>
            </TableRow>
            <TableRow key="email">
              <TableCell component="th" scope="row">
                Email
              </TableCell>
              <TableCell align="center">
                {user.email || "Могут редактировать только админы"}
              </TableCell>
            </TableRow>
            <TableRow key="phone">
              <TableCell component="th" scope="row">
                Телефон
              </TableCell>
              <TableCell align="center">
                <TextField
                  disabled={isLoading}
                  label={form.errors.phone}
                  className={classes.textField}
                  margin="normal"
                  error={Boolean(form.errors.phone)}
                  name="phone"
                  onChange={form.handleChange}
                  value={form.values.phone}
                />
              </TableCell>
            </TableRow>
            <TableRow key="phone">
              <TableCell component="th" scope="row" />
              <TableCell align="center">
                <div className={classes.btnWrapper}>
                  <Button
                    disabled={isLoading}
                    size="small"
                    color="primary"
                    onClick={form.submitForm}
                  >
                    Edit
                  </Button>
                  {isLoading && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </form>
    </Paper>
  );
};

export default FormEdit;
