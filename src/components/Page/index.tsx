import * as React from "react";
import { Helmet } from "react-helmet";

import LeftBar from "../../containers/LeftBar";
import TopBar from "../../containers/TopBar";

import "./index.scss";

interface IProps {
  children: React.ReactChild | React.ReactChild[];
  title: string;
  titleContent?: any;
  rightContent?: any;
}

const Page = ({ children, title, titleContent, rightContent }: IProps) => (
  <article className="page">
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
    <TopBar titleContent={titleContent || title} rightContent={rightContent} />
    <LeftBar titleContent={titleContent || title} />
    <main className="page-content">{children}</main>
  </article>
);

export default Page;
