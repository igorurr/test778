import * as React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";

import { createStore, store } from "../../store";

import routes from "./routes";

import PayLoader from "../PayLoader";

interface IProps {}

interface IState {}

const history = createBrowserHistory();
createStore(history);

class App extends React.Component<IProps, IState> {
  public render() {
    // импортим страницы: главная, юзер, блог главная, блог страница
    return (
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
  }

  public componentDidMount() {}
}

export default App;
