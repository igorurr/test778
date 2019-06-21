import * as React from "react";
import { Link } from "react-router-dom";

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
import Chip from "@material-ui/core/Chip";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import routes from "../../../containers/App/routes";

import Page from "../../Page";
import { IPostContent } from "../../../types/blog";

interface IProps {
  isLoading: boolean;
  post: IPostContent;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "7px auto",
      maxWidth: 900,
      overflowX: "auto",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
    mediaRoot: {
      maxWidth: 600,
      margin: "auto",
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
    chip: {
      margin: theme.spacing(1),
      cursor: "pointer",
    },
  }),
);

const BlogPage = ({ post, isLoading }: IProps) => {
  const classes = useStyles();
  return (
    <Page
      title={isLoading ? "Статья в блоге" : post.title}
      titleContent={
        <span>
          <Link className={classes.link} to={routes.blog.link()}>
            Блог
          </Link>
          {" - " + (isLoading ? "Загрузка" : post.title)}
        </span>
      }
    >
      {isLoading ? (
        <p>Загрузка</p>
      ) : (
        <Card className={classes.root}>
          <CardHeader
            action={
              <Link to={routes.user.link(Number(post.user.id))}>
                <Chip
                  color="primary"
                  avatar={
                    <Avatar title={post.user.login}>
                      {post.user.login[0].toUpperCase()}
                    </Avatar>
                  }
                  label={post.user.login}
                  className={classes.chip}
                />
              </Link>
            }
            title={post.title}
            subheader={post.date.format("HH:mm DD.MM.YYYY")}
          />
          <CardContent className={classes.mediaRoot}>
            <CardMedia
              className={classes.media}
              image="/media/post-1.jpg"
              title={post.title}
            />
          </CardContent>
          <CardContent>{post.fullContent}</CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </Page>
  );
};

export default BlogPage;
