import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { History } from "history"; // tslint:disable-line

import reducers from "../reducers";

export const createStore = (history: History<any>) =>
  reduxCreateStore(
    combineReducers({
      ...reducers,
      router: connectRouter(history),
    }),
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history))),
  );
