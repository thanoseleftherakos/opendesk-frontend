import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';

import requiereAuth from './components/require_auth';
import App from './components/app';
import Login from './components/login/login';
import Dashboard from './components/dashboard/';
import SingleReservation from './components/reservations/single';
import Reservations from './components/reservations/index';
import EditReservation from './components/reservations/edit';
import CreateReservation from './components/reservations/create';
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
        <Route path="reservations" component={Reservations} />
        <Route path="reservations/:id" component={SingleReservation} />
        <Route path="reservations/edit/:id" component={EditReservation} />
        <Route path="reservation/create" component={CreateReservation} />
      </Route>
      <Route path="/login" component={Login} />
    </Router>
  </Provider>
  , document.getElementById('appContainer'));
