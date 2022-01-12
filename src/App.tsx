import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.less';
import Wrapper from 'components/Wrapper';
import Home from 'pages/Home';
import store from './store';

function App(): JSX.Element {
    const routes = (
        <Provider store={store}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='' component={Home} />
            </Switch>
        </Provider>
    );
    return <Wrapper>{routes}</Wrapper>;
}

export default App;
