import * as React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export interface IScreenPosition {
  horizontal: IPosition;
  vertical: IPosition;
}

export interface IPosition {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface IPositionOffset {
  x?: string;
  y?: string;
}

export interface IStrongManItem {
  link?: string;
  title: string;
  position: IScreenPosition;
}

interface IProps extends IStrongManItem {
  positionOffset: IPositionOffset;
}

const positionOffsetToTranslate = ({ x, y }: IPositionOffset) => ({
  transform: `translate(${x},${y})`,
});

const getPositionOffset = (
  { horizontal, vertical }: IScreenPosition,
  isHorizontal: boolean,
): IPosition => (isHorizontal ? horizontal : vertical);

const preprocessPosition = (position: IPosition) =>
  Object.keys(position).reduce(
    // @ts-ignore
    (acc: IPosition, key: string) => ({ ...acc, [key]: `${position[key]}%` }),
    {},
  );

const StrongManItem = ({ link, title, position, positionOffset }: IProps) => {
  const matchMin900 = useMediaQuery("(min-width: 900px)");

  const content = (
    <article
      className="strong-man-item"
      style={{
        ...preprocessPosition(getPositionOffset(position, matchMin900)),
        ...positionOffsetToTranslate(positionOffset),
      }}
    >
      <h4 className="strong-man-item-title">{title}</h4>
      <div className="strong-man-item-point" />
    </article>
  );

  return link ? <Link to={link}>{content}</Link> : content;
};

export default StrongManItem;
