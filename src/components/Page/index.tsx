import * as React from "react";
import { Helmet } from "react-helmet";

import LeftBar from "../../containers/LeftBar";
import TopBar from "../../containers/TopBar";

import "./index.scss";

interface IProps {
  children: React.ReactChild | React.ReactChild[];
  title: string;
}

const Page = ({ children, title }: IProps) => (
  <article className="page">
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
    <TopBar />
    <LeftBar />
    <main className="page-content">{children}</main>
  </article>
);

export default Page;
