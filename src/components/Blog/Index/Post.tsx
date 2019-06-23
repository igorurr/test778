import * as React from "react";
import { Link } from "react-router-dom";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import cn from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { IPost } from "../../../types/blog";

import useExpand from "../../../hoooks/useExpand";

interface IProps {
  post: IPost;
  /*expanded: boolean;
  setExpandClick: (value: boolean) => void;
  toggleExpandClick: () => void;*/
  goToPost: () => void;
  goToPostPath: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: 7,
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
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
  }),
);

const Post = ({
  post: {
    smallContent,
    fullContent,
    title,
    date,
    user: { login },
  },
  goToPost,
  goToPostPath,
}: IProps) => {
  const classes = useStyles();
  const [expanded, toggleExpandClick] = useExpand();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="Recipe"
            className={classes.avatar}
            title={login}
            onClick={goToPost}
          >
            {login[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Link className={classes.link} to={goToPostPath}>
            {title}
          </Link>
        }
        subheader={
          <Link className={classes.link} to={goToPostPath}>
            {date.format("HH:mm DD.MM.YYYY")}
          </Link>
        }
      />
      <CardActionArea onClick={goToPost}>
        <CardMedia
          className={classes.media}
          image="/media/post-1.jpg"
          title={title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {smallContent}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing={true}>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={cn(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={toggleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit={true}>
        <CardContent>{fullContent}</CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
