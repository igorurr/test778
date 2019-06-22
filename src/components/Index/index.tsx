import * as React from "react";
import { Link } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Page from "../Page";
import routes from "../../containers/App/routes";
import { IUser } from "../../types/user";

import Opportunities from "./Opportunities";
import ParalaxHeader from "./ParalaxHeader";
import StrongMan from "../../containers/Index/StrongMan";
import { IOpportunitiesItem } from "./Opportunities/OpportunitiesItem";
import Footer from "./Footer";

import "./styles.scss";

interface IProps {
  user: IUser;
  opportunitiesData: IOpportunitiesItem[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: "none",
      color: "inherit",
    },
  }),
);

const Index = ({ user, opportunitiesData }: IProps) => {
  const classes = useStyles();

  return (
    <Page title="Загрузка" titleContent={<span>Демо версия</span>}>
      <div>
        <ParalaxHeader />
        <StrongMan />
        <Opportunities data={opportunitiesData} />
        <Footer />
      </div>
    </Page>
  );
};

export default Index;
