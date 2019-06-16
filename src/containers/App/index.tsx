import * as React from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { createBrowserHistory } from "history";

import { store } from "../../store";

import routes from "./routes";

import PayLoader from "../PayLoader";

const history = syncHistoryWithStore(createBrowserHistory() as any, store);

const App = () => (
  <Provider store={store}>
    <Router history={history as any}>
      <PayLoader>
        <Switch>
          {Object.values(routes).map(({ route, component: Comp }) => (
            <Route key={route} path={route} component={Comp} />
          ))}
        </Switch>
      </PayLoader>
    </Router>
  </Provider>
);

export default App;
