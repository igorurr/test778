import * as React from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import { IUser } from "../../types/user";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

interface IProps {
  user: IUser;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: "7px auto",
      maxWidth: 900,
      overflowX: "auto",
    },
  }),
);

const TableView = ({ user }: IProps) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
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
            <TableCell align="center">{user.firstName}</TableCell>
          </TableRow>
          <TableRow key="secondName">
            <TableCell component="th" scope="row">
              Фамилия
            </TableCell>
            <TableCell align="center">{user.secondName}</TableCell>
          </TableRow>
          <TableRow key="thirdName">
            <TableCell component="th" scope="row">
              Отчество
            </TableCell>
            <TableCell align="center">{user.thirdName}</TableCell>
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
            <TableCell align="center">{user.phone}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TableView;
