import * as React from "react";
import cn from "classnames";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

interface IProps {
  leftBarOpen: () => void;
  topBarHided: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      top: 0,
    },
    rootHided: {
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

const TopBar = ({ leftBarOpen, topBarHided }: IProps) => {
  const classes = useStyles();

  return (
    <AppBar
      className={cn(classes.root, topBarHided && classes.rootHided)}
      position="static"
    >
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
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
