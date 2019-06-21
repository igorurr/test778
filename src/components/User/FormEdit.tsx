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
import Chip from "@material-ui/core/Chip";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Edit from "@material-ui/icons/Edit";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Drawer from "@material-ui/core/Drawer";
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

  return !isLoading ? (
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
              <TableCell align="center">{user.email}</TableCell>
            </TableRow>
            <TableRow key="phone">
              <TableCell component="th" scope="row">
                Телефон
              </TableCell>
              <TableCell align="center">
                <TextField
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
          </TableBody>
        </Table>
        <Card>
          <CardActions>
            <Button size="small" color="primary" onClick={form.submitForm}>
              Edit
            </Button>
          </CardActions>
        </Card>
      </form>
    </Paper>
  ) : (
    <p>Загрузка</p>
  );
};

export default FormEdit;
