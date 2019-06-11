import * as React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, connectRouter } from 'connected-react-router';

import reducers from '../../reducers';
import routes from './routes';

interface IProps {
    
}

interface IState {
    
}

const history = createBrowserHistory();

const store = createStore(
    combineReducers( {
        ...reducers,
        router: connectRouter(history),
    } )
        ,composeWithDevTools( 
            applyMiddleware( thunk )
  ));

class App extends React.Component<IProps, IState> {

    public render() {

        // импортим страницы: главная, юзер, блог главная, блог страница
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <>
                        <Switch>
                            {Object.values(routes).map( ({ route, component: Comp }) => (
                                <Route key={route} path={route} component={Comp} />
                            ) )}
                        </Switch>
                    </>
                </ConnectedRouter>
            </Provider>
        );
    }

    public componentDidMount() {
        
    }
    
}

export default App;