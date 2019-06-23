import * as React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import { red } from "@material-ui/core/colors";
import Edit from "@material-ui/icons/Edit";

import Page from "../Page";
import { IUser } from "../../types/user";

import TableView from "./TableView";

import FormEdit from "../../containers/User/FormEdit";
import PageLoading from "../PageLoading";

interface IProps {
  isMy: boolean;
  isLoading: boolean;
  user: IUser;
  toggleEdit: () => void;
  isEditing: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "7px auto",
      maxWidth: 900,
      overflowX: "auto",
    },
    mediaRoot: {
      maxWidth: 600,
      margin: "auto",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    chip: {
      margin: theme.spacing(1),
    },
  }),
);

const User = ({ isMy, isLoading, user, toggleEdit, isEditing }: IProps) => {
  const classes = useStyles();
  return (
    <Page
      title={
        isLoading ? "Загрузка" : `${isMy ? "Я" : "Пользователь"} ${user.login}`
      }
      rightContent={
        isMy && (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={toggleEdit}
          >
            <Edit />
          </IconButton>
        )
      }
    >
      {isLoading ? (
        <PageLoading />
      ) : (
        <>
          <Card className={classes.root}>
            <CardHeader
              action={
                <Chip
                  color="primary"
                  avatar={
                    <Avatar title={user.login}>
                      {user.login[0].toUpperCase()}
                    </Avatar>
                  }
                  label={user.login}
                  className={classes.chip}
                />
              }
              title={user.login}
              subheader={`${user.firstName} ${user.secondName} ${user.thirdName}`}
            />
          </Card>
          {isEditing ? <FormEdit /> : <TableView user={user} />}
        </>
      )}
    </Page>
  );
};

export default User;
