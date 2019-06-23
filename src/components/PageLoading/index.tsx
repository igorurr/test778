import * as React from "react";

import Page from "../Page";

import "./styles.scss";

const PageLoading = () => {
  return (
    <Page title="Загрузка сайта">
      <article className="page-loader">
        <div className="loader">
          <div className="l_main">
            <div className="l_square">
              <span />
              <span />
              <span />
            </div>
            <div className="l_square">
              <span />
              <span />
              <span />
            </div>
            <div className="l_square">
              <span />
              <span />
              <span />
            </div>
            <div className="l_square">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </article>
    </Page>
  );
};

export default PageLoading;
