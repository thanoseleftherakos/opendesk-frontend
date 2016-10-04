import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://dev.webf8.net/hotelapi/public';


export function loginUser({ email, password }) {
	return function (dispatch) {
		axios.post(`${ROOT_URL}/auth/login`, { email, password })
		.then(response => {
			dispatch({ type: AUTH_USER });

			localStorage.setItem('token', response.data.token);
			browserHistory.push('/hotel/dashboard');
		})
		.catch(error => {
			dispatch(authError(error.response.data)); 
		});
	};
}

export function logoutUser() {
	localStorage.removeItem('token'); 
	setAuthorizationToken(false);
	return {
		type: UNAUTH_USER
	};
}

export function signupUser(formData) { 
	return function (dispatch) {
		axios.post(`${ROOT_URL}/auth/signup`, formData)
			.then(response => {
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.token);
				browserHistory.push('/hotel/dashboard');
			})
			.catch(error => {
				dispatch(authError(error.response.data.message)); 
			});
	};
}


export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}