import { LEFT_BAR_OPEN, LEFT_BAR_CLOSE } from "../consts/app";

import { IAppReducer } from "../types/app";

const initialState: IAppReducer = {
  leftBarOpened: false,
};

export default (
  state: IAppReducer = initialState,
  { type, ...action }: any,
): IAppReducer => {
  switch (type) {
    case LEFT_BAR_OPEN:
      return {
        ...state,
        leftBarOpened: true,
      };
    case LEFT_BAR_CLOSE:
      return {
        ...state,
        leftBarOpened: false,
      };

    default:
      return state;
  }
};
