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

interface IProps {}

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

const UserCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <TextField
          label="Login"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          label="Password"
          className={classes.textField}
          margin="normal"
        />
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Login
        </Button>
        <Button size="small" color="primary">
          Registration
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
