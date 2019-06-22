import * as React from "react";
import cn from "classnames";

import "./styles.scss";

export interface IOpportunitiesItem {
  id: number;
  header: string;
  content: string;
}

interface IProps {
  data: IOpportunitiesItem;
  toggle: () => void;
  opened: boolean;
}

const OpportunitiesItem = ({
  data: { header, content },
  toggle,
  opened,
}: IProps) => {
  return (
    <article
      className={cn("opportunities-item", opened && "active")}
      onClick={toggle}
    >
      <h2 className="opportunities-item-header">{header}</h2>
      <h4 className="opportunities-item-content">{content}</h4>
    </article>
  );
};

export default OpportunitiesItem;
