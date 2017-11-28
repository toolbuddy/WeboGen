/* Import modules */
import React from 'react';
import Router from 'react-router'
import ReactDOM from 'react-dom';

/* Import components */
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Routes from './routes';
import App from './layouts/App';
import Navbar from './components/Navbar';

/* Import actions */
import NavbarAction from './actions/NavbarAction';
import HomeAction from './actions/HomeAction';

let history = createBrowserHistory();

ReactDOM.render( 
    <Router history={ history }>{ Routes }</Router>, 
    document.getElementById('app')
);