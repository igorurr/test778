import * as React from "react";

import "./styles.scss";
import withTopOffset from "../../../hoooks/withTopOffset";

const MAX_PARALLAX_HEIGHT = 1500;

interface IProps {
  topOffset: number;
}

let height: number;

function ParalaxHeader({ topOffset }: IProps) {
  !height && (height = window.innerHeight * 0.83);

  return (
    <article className="paralax-header" style={{ height: `${height}px` }}>
      <div
        className="paralax-header-background paralax-header-item"
        style={{ backgroundPosition: `center ${topOffset}%` }}
      />
      <div className="paralax-header-black-background paralax-header-item" />
      <main className="paralax-header-content paralax-header-item">
        <h1>Демо версия</h1>
        <h4>Прокрути до конца эту страницу, путник</h4>
      </main>
    </article>
  );
}

export default withTopOffset(val =>
  val > MAX_PARALLAX_HEIGHT ? 0 : 100 - (100 * val) / MAX_PARALLAX_HEIGHT,
)(ParalaxHeader);
