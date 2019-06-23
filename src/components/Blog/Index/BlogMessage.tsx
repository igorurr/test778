import * as React from "react";
import cn from "classnames";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

interface IProps {
  message: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "0 7px",
      boxSizing: "border-box",
    },
    rootMin990: {
      width: "580px !important",
    },
    paperTab: {
      padding: "30px 60px",
    },
    paperMob: {
      padding: "15px 30px",
    },
    content: {
      color: "#AAA",
      fontWeight: 100,
    },
    contentTab: {
      fontSize: "22px",
    },
    contentMob: {
      fontSize: "18px",
    },
  }),
);

const BlogMessage = ({ message }: IProps) => {
  const matchMax420 = useMediaQuery("(max-width: 420px)");
  const matchMin990 = useMediaQuery("(min-width: 990px)");
  const classes = useStyles();

  return (
    <div
      className={cn(
        "blog-index-item",
        classes.root,
        matchMin990 && classes.rootMin990,
      )}
    >
      <Paper className={cn(matchMax420 ? classes.paperMob : classes.paperTab)}>
        <Typography variant="h5" component="h3" align="center">
          <span
            className={cn(
              matchMax420 ? classes.contentMob : classes.contentTab,
              classes.content,
            )}
          >
            {message}
          </span>
        </Typography>
      </Paper>
    </div>
  );
};

export default BlogMessage;
