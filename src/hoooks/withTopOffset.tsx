import * as React from "react";

interface IState {
  topOffset: number;
}

interface IProps {
  children: (topOffset: number) => any;
}

type IExpression = (val: number) => number;

class CalculateTopOffset extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.checkResize = this.checkResize.bind(this);

    this.state = {
      topOffset: window.scrollY,
    };
  }

  public checkResize() {
    this.setState({ topOffset: window.scrollY });
  }

  public componentDidMount() {
    window.addEventListener("scroll", this.checkResize);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.checkResize);
  }

  public render() {
    const { topOffset } = this.state;
    const { children } = this.props;

    return children(topOffset);
  }
}

const defExpression = (val: number) => val;

const withTopOffset = (exprassion: IExpression = defExpression) => (
  Component: any,
) => (props: any) => (
  <CalculateTopOffset>
    {(topOffset: number) => (
      <Component {...props} topOffset={exprassion(topOffset)} />
    )}
  </CalculateTopOffset>
);

export default withTopOffset;
