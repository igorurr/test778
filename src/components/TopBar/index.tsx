import * as React from "react";
import cn from "classnames";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import FaceIcon from "@material-ui/icons/Face";
import { IUser } from "../../types/user";
import Home from "@material-ui/icons/Home";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface IProps {
  leftBarOpen: () => void;
  goHome: () => void;
  topBarHided: boolean;
  user: IUser;
  titleContent: React.ReactElement;
  goUser: () => void;
  rightContent?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "fixed",
      transition: "all 0.1s linear",
      top: 0,
      height: 64,
      justifyContent: "center",
    },
    hided: {
      transform: "translate(0, -53px)",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const TopBar = ({
  leftBarOpen,
  topBarHided,
  titleContent,
  user,
  goHome,
  goUser,
  rightContent,
}: IProps) => {
  const classes = useStyles();
  const match420px = useMediaQuery("(max-width:420px)");

  return (
    <AppBar className={cn(classes.appBar, topBarHided && classes.hided)}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={leftBarOpen}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={goHome}
        >
          <Home />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {!match420px && titleContent}
        </Typography>
        {rightContent}
        {Number(user.id) === 0 ? (
          <Button color="inherit" onClick={leftBarOpen}>
            Login{" "}
          </Button>
        ) : (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={goUser}
          >
            <FaceIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
