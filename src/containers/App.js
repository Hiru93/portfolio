import React from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';

//Actions

//Components
import Home from '../components/home/index';
import Login from '../components/login/index';

//Style
import './App.scss';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/mock-login' component={ Login } />
                </Switch>
            </Router>
        );
    }
}

export default App;