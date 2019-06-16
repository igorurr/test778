import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerReducer } from "react-router-redux";

import reducers from "../reducers";

export const store = reduxCreateStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
