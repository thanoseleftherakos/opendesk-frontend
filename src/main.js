import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';

import requiereAuth from './components/require_auth';
import App from './components/app';
import Login from './components/login/login';
import SignUp from './components/signup';
import Dashboard from './components/dashboard';
import reducers from './reducers';


import styles from './main.scss'; 

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

//check if user is logged in
const token = localStorage.getItem('token');
if (token) {
	store.dispatch({ type: AUTH_USER }); //dispatch an action to update application state
}

ReactDOM.render(
  <Provider store={store}>
  	<Router history={browserHistory}>
  		<Route path="/" component={requiereAuth(App)}>
  			<Route path="dashboard" component={Dashboard} />
  		</Route>
  		
  		<Route path="/login" component={Login} />
  		<Route path="/signup" component={SignUp} />
  	</Router>
  </Provider>
  , document.getElementById('appContainer'));
