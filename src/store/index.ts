import { connectRouter } from "connected-react-router";
import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { History } from "history";

import reducers from "../reducers";

export let store: any = null;

export const createStore = (history: History<any>) =>
  (store = reduxCreateStore(
    combineReducers({
      ...reducers,
      router: connectRouter(history),
    }),
    composeWithDevTools(applyMiddleware(thunk)),
  ));
