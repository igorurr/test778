import { LEFT_BAR_OPEN, LEFT_BAR_CLOSE } from "../consts/app";

export const leftBarOpen = () => ({
  type: LEFT_BAR_OPEN,
});

export const leftBarClose = () => ({
  type: LEFT_BAR_CLOSE,
});

export const leftBarCloseOnChangeRouter = (dispatch: any) => () => {
  dispatch(leftBarClose());
};
