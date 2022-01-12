import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.less';
import Wrapper from 'components/Wrapper';
import Repo from 'pages/Repo';
import RepoDetail from 'pages/RepoDetail';

function App(): JSX.Element {
    const routes = (
        <Switch>
            <Route exact path='/' component={Repo} />
            <Route path='/repos/:repoId' component={RepoDetail} />
            <Route path='' component={Repo} />
        </Switch>
    );
    return <Wrapper>{routes}</Wrapper>;
}

export default App;
