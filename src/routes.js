import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';


import App from './components/app';
import Main from './components/mainsite';
import Login from './components/login/login';
import Dashboard from './components/dashboard/';
import SingleReservation from './components/reservations/single';
import Reservations from './components/reservations/index';
import EditReservation from './components/reservations/edit';
import CreateReservation from './components/reservations/create';
import Availability from './components/availability/index';
import Settings from './components/settings/index';
import Profile from './components/user/profile';
import Calendar from './components/calendar/index';
import Stats from './components/stats/index';

import requiereAuth from './components/require_auth';

export default ( 
	<Route path="/">
	<IndexRedirect to='/login' />
		<Route path="/hotel" component={requiereAuth(App)}>
			<IndexRedirect to="/hotel/dashboard" />
			<Route name='dashboard' path="dashboard" component={Dashboard} />
			<Route path="reservations" component={Reservations} />
			<Route path="reservations/:id" component={SingleReservation} />
			<Route path="reservations/edit/:id" component={EditReservation} />
			<Route path="reservation/create" component={CreateReservation} />
			<Route path="availability" component={Availability} />
			<Route path="settings" component={Settings} />
			<Route path="user" component={Profile} />
			<Route path="calendar" component={Calendar} />
			<Route path="stats" component={Stats} />
		</Route>
		<Route path="/login" component={Login} />
	</Route>
)