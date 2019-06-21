import * as React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import { createStore } from "../../store";

import routes from "./routes";

import PayLoader from "../PayLoader";

import { leftBarCloseOnChangeRouter } from "../../actions/app";

const history = createBrowserHistory();

const store = createStore(history);

history.listen(leftBarCloseOnChangeRouter(store.dispatch));

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PayLoader>
        <Switch>
          {Object.values(routes).map(({ route, component: Comp }) => (
            <Route key={route} path={route} component={Comp} />
          ))}
        </Switch>
      </PayLoader>
    </ConnectedRouter>
  </Provider>
);

export default App;
