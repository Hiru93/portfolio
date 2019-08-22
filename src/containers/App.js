import React from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';

//Actions

//Components
import Home from '../components/home/index';
import Login from '../components/login/index';
import UserDash from '../components/dash/index';

//Style
import './App.scss';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/mock-login' component={ Login } />
                    <Route exact path='/user-panel' component={ UserDash } />
                </Switch>
            </Router>
        );
    }
}

export default App;