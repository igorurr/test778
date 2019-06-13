import * as React from "react";

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

import Page from "../../Page";
import { IPostContent } from "../../../types/blog";

interface IProps {
  isLoading: boolean;
  post: IPostContent;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: 7,
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
    },
  }),
);

const BlogPage = ({ post, isLoading }: IProps) => {
  const classes = useStyles();
  console.log(post);
  return (
    <Page title={isLoading ? "Статья в блоге" : post.title}>
      {isLoading ? (
        <p>Загрузка</p>
      ) : (
        <Card className={classes.card}>
          <CardHeader
            action={
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
