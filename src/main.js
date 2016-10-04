import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Route, Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';

import reducers from './reducers';

import routes from './routes';

import styles from './main.scss'; 

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddleware(reducers);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

//check if user is logged in
const token = localStorage.getItem('token');
if (token) {
	store.dispatch({ type: AUTH_USER }); //dispatch an action to update application state
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('appContainer'));
