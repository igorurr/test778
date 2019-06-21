import * as React from "react";
import { Link } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Page from "../Page";
import routes from "../../containers/App/routes";
import { IUser } from "../../types/user";

interface IProps {
  user: IUser;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: "none",
      color: "inherit",
    },
  }),
);

const Index = ({ user }: IProps) => {
  const classes = useStyles();

  return (
    <Page
      title="Загрузка"
      titleContent={
        <>
          <Link className={classes.link} to={routes.blog.link()}>
            Блог
          </Link>
          {Number(user.id) !== 0 && (
            <>
              ,{" "}
              <Link className={classes.link} to={routes.userMy.link()}>
                Моя страница
              </Link>
            </>
          )}
        </>
      }
    >
      <div>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
        <p>gdfgfgdfgdfgdfg</p>
      </div>
    </Page>
  );
};

export default Index;
