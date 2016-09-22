import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Login from './components/login/login';
import reducers from './reducers';


import styles from './main.scss'; 

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<Router history={browserHistory}>
  		<Route path="/" component={App} />
  		<Route path="/login" component={Login} />
  	</Router>
  </Provider>
  , document.getElementById('appContainer'));
