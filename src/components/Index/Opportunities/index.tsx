import * as React from "react";

import "./styles.scss";
import OpportunitiesItem, { IOpportunitiesItem } from "./OpportunitiesItem";

interface IProps {
  data: Readonly<IOpportunitiesItem[]>;
}

const ParalaxHeader = ({ data }: IProps) => {
  const [itemOpened, setItemOpened] = React.useState<null | number>(null);

  const toggleItem = (item: number) => () =>
    setItemOpened(item === itemOpened ? null : item);

  return (
    <article className="opportunities index-container">
      <h2 className="opportunities-header index-container-header">
        <b>Как</b> этим пользоваться
      </h2>
      <section className="opportunities-items">
        {data.map(item => (
          <OpportunitiesItem
            key={item.id}
            data={item}
            opened={item.id === itemOpened}
            toggle={toggleItem(item.id)}
          />
        ))}
        <div className="opportunities-background" />
      </section>
    </article>
  );
};

export default ParalaxHeader;
