import * as React from "react";

export interface IPositionOffset {
  x: number;
  y: number;
}

interface IState {
  mouseMoveOffset: IPositionOffset;
}

interface IProps {
  children: (mouseMoveOffset: IPositionOffset) => any;
}

type IExpression = (val: IPositionOffset) => IPositionOffset;

class CalculateMouseMove extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.checkMove = this.checkMove.bind(this);

    this.state = {
      mouseMoveOffset: { x: 0, y: 0 },
    };
  }

  public checkMove({ pageX, pageY }: any) {
    this.setState({ mouseMoveOffset: { x: pageX, y: pageY } });
  }

  public componentDidMount() {
    window.addEventListener("mousemove", this.checkMove);
  }

  public componentWillUnmount() {
    window.removeEventListener("mousemove", this.checkMove);
  }

  public render() {
    const { mouseMoveOffset } = this.state;
    const { children } = this.props;

    return children(mouseMoveOffset);
  }
}

const defExpression = (val: IPositionOffset) => val;

const withMouseMove = (exprassion: IExpression = defExpression) => (
  Component: any,
) => (props: any) => (
  <CalculateMouseMove>
    {(mouseMoveOffset: IPositionOffset) => (
      <Component {...props} mouseMoveOffset={exprassion(mouseMoveOffset)} />
    )}
  </CalculateMouseMove>
);

export default withMouseMove;
