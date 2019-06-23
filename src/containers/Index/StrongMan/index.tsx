import * as React from "react";

import Component from "../../../components/Index/StrongMan";

// import withTopOffset from "../../../hoooks/withTopOffset";

import routes from "../../App/routes";

import getData from "./data";
/*import withMouseMove, {
  IPositionOffset as IMouseMoveIPositionOffset,
} from "../../../hoooks/withMouseMove";*/
import {
  IPositionOffset as IStrongManPositionOffset,
  IStrongManItem,
} from "../../../components/Index/StrongMan/StrongManItem";

interface IPosition {
  x: number;
  y: number;
}

/*interface IProps {
  topOffset: number;
  mouseMoveOffset: IMouseMoveIPositionOffset;
}*/

interface IState {
  offset: IStrongManPositionOffset;
  compPosition?: IPosition;
}

class StrongMan extends React.Component<{}, IState> {
  private compRef: any;
  private data: Readonly<IStrongManItem[]>;

  constructor(props: {}) {
    super(props);
    this.compRef = React.createRef();
    this.data = getData(routes);

    this.state = {
      offset: { x: "0", y: "0" },
    };
  }

  /*public static getDerivedStateFromProps(
    { topOffset, mouseMoveOffset }: IProps,
    { compPosition }: IState,
  ) {
    if (!compPosition) return null;

    const dx = mouseMoveOffset.x - compPosition.x;
    const dy = mouseMoveOffset.y + topOffset - compPosition.y;

    return {
      offset: { x: `${dx}px`, y: `${dy}px` },
    };
  }*/

  public render() {
    const { offset } = this.state;

    return (
      <Component compRef={this.compRef} offset={offset} data={this.data} />
    );
  }

  public getCompPosition() {
    if (!this.compRef) return;

    const { offsetTop, offsetHeight, offsetWidth } = this.compRef.current;

    this.setState({
      compPosition: {
        x: offsetWidth / 2,
        y: offsetTop + offsetHeight / 2,
      },
    });
  }

  public componentDidMount() {
    this.getCompPosition();
  }
}

// export default withTopOffset()(withMouseMove()(StrongMan));
export default StrongMan;
