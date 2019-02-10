import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import Beneficiaries from './Beneficiaries';
import Notes from './Notes';
import Login from './Login';

import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <Router>
        <React.Fragment>
            <Route path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/beneficiaries" component={Beneficiaries} />
            <Route exact path="/notes" component={Notes} />
        </React.Fragment>
    </Router>), 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
