import * as React from "react";

import Page from "../Page";
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

const Index = ({ opportunitiesData }: IProps) => {
  return (
    <Page title="Демо версия" titleContent={<span>Демо версия</span>}>
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
