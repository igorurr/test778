import * as React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import cn from "classnames";
import { IUser } from "../../types/user";
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

import UserCard from "../../containers/LeftBar/UserCard";
import LoginRegistrationForm from "../../containers/LeftBar/LoginRegistrationForm";

interface IProps {
  open: boolean;
  user: IUser;
  isLoading: boolean;
  onClose: () => void;
  logout: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerInner: {
      width: 400,
      maxWidth: "70vw",
      paddingTop: 150,
    },
    drawerInner420px: {
      width: "100vw",
      maxWidth: "initial",
    },
    drawerClose: {
      position: "absolute",
      right: 15,
      top: 15,
    },
    card: {
      margin: 7,
    },
  }),
);

const LeftBar = ({ open, onClose, user, isLoading, logout }: IProps) => {
  const classes = useStyles();
  const match420px = useMediaQuery("(max-width:420px)");
  return (
    <Drawer open={open} onClose={onClose} anchor="left">
      <div
        className={cn(
          classes.drawerInner,
          match420px && classes.drawerInner420px,
        )}
      >
        {match420px && (
          <IconButton
            className={classes.drawerClose}
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        )}
        {isLoading && <p>Загрузка</p>}
        {!isLoading && !!user.id && <UserCard logout={logout} user={user} />}
        {!isLoading && !user.id && <LoginRegistrationForm />}
      </div>
    </Drawer>
  );
};

export default LeftBar;
