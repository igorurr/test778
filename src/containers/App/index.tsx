import * as React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history"; // tslint:disable-line

import { createStore } from "../../store";

import routes from "./routes";

import PageLoading from "../PageLoading";

import { leftBarCloseOnChangeRouter } from "../../actions/app";

import Component from "../../components/App/index";

const history = createBrowserHistory();

const store = createStore(history);

history.listen(leftBarCloseOnChangeRouter(store.dispatch));

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Component>
        <PageLoading>
          <Switch>
            {Object.values(routes).map(({ route, component: Comp }) => (
              <Route key={route} path={route} component={Comp} />
            ))}
          </Switch>
        </PageLoading>
      </Component>
    </ConnectedRouter>
  </Provider>
);

export default App;
