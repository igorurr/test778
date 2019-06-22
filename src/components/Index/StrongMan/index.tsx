import * as React from "react";

import StrongManItem, {
  IStrongManItem,
  IPositionOffset,
} from "./StrongManItem";

import "./styles.scss";

interface IProps {
  offset: IPositionOffset;
  data: Readonly<IStrongManItem[]>;
  compRef: React.Ref<any>;
}

let height: number;

const StrongMan = ({ offset, data, compRef }: IProps) => {
  !height && (height = window.innerHeight * 1);

  return (
    <article
      className="strong-man index-container"
      ref={compRef}
      style={{ height: `${height}px` }}
    >
      <h2 className="strong-man-header index-container-header">
        <b>Что</b> тут есть
      </h2>
      <section className="strong-man-items">
        <div className="strong-man-man" />
        {data.map(item => (
          <StrongManItem key={item.title} {...item} positionOffset={offset} />
        ))}
      </section>
    </article>
  );
};

export default StrongMan;
