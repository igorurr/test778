import * as React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { IUser } from "../../../types/user";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

interface IProps {
  user: IUser;
  logout: () => void;
  goToUser: () => void;
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
      lineHeight: "39px",
      marginLeft: 14,
    },
  }),
);

const UserCard = ({ user, logout, goToUser }: IProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={goToUser}>
        <CardContent className={classes.userCard}>
          <Avatar>{user.login[0].toUpperCase()}</Avatar>
          <Typography
            className={classes.userLogin}
            gutterBottom={true}
            variant="h5"
            component="h2"
          >
            {user.login}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={logout} size="small" color="primary">
          Logout
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
