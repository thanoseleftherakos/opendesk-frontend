import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_DASHBOARD, FETCH_RESERVATION, REQUEST_ERROR, REQUEST_SUCCESS, FETCH_RESERVATION_FORM_PARAMS, FETCH_RESERVATIONS, REMOVE_RESERVATION } from './types';

const ROOT_URL = 'http://dev.webf8.net/hotelapi/public';


export function loginUser({ email, password }) {
	return function (dispatch) {
		//Submit to server
		axios.post(`${ROOT_URL}/auth/login`, { email, password })
		.then(response => {
			dispatch({ type: AUTH_USER });

			localStorage.setItem('token', response.data.token);

			browserHistory.push('/dashboard');
		})
		.catch(error => {
			dispatch(authError(error.response.data)); 
		});
	};
}

export function signupUser(formData) { 
	return function (dispatch) {
		axios.post(`${ROOT_URL}/auth/signup`, formData)
			.then(response => {

				dispatch({ type: AUTH_USER });

				localStorage.setItem('token', response.data.token);

				browserHistory.push('/');
			})
			.catch(error => {
				dispatch(authError(error.response.data.message)); 
			});
	};
}

export function logoutUser() {
	localStorage.removeItem('token'); //maybe a better solution..
	return {
		type: UNAUTH_USER
	};
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function requestError(error) {
	return {
		type: REQUEST_ERROR,
		payload: error
	};
}
export function requestSuccess(message) {
	return {
		type: REQUEST_SUCCESS,
		payload: message
	};
}

export function fetchDashboard() {
	return function (dispatch) {
		axios.get(`${ROOT_URL}/hotelinfo`, {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({ 
				type: FETCH_DASHBOARD,
				payload: response.data
			});
		})
		.catch(error => {
			localStorage.removeItem('token');
			browserHistory.push('/');
		});
	};
}

export function fetchReservation(id) {

	return function(dispatch) {
		axios.get(`${ROOT_URL}/reservations/${id}`, {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({ 
				type: FETCH_RESERVATION,
				payload: response.data
			});
		})
		.catch(error => {
			localStorage.removeItem('token');
			browserHistory.push('/');
		});
	};

}

export function editReservation(formData,id) { 
	return function (dispatch) {
		formData._method = 'PUT';
		axios.post(`${ROOT_URL}/reservations/${id}`, formData ,{
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			dispatch(requestSuccess(response.data)); 

		})
		.catch(error => {
			if(error.response.data.code == 422) { //validation
				dispatch(requestError("Please fill all the required fields")); 	
			}
			else{
				dispatch(requestError("Unable to update, please try again later")); 	
			}
		});
	};
}
export function createReservation(formData,id) { 
	return function (dispatch) {
		axios.post(`${ROOT_URL}/reservations`, formData ,{
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {			
			dispatch(requestSuccess(response.data)); 

		})
		.catch(error => {
			if(error.response.data.code == 422) { //validation
				dispatch(requestError("Please fill all the required fields")); 	
			}
			else{
				dispatch(requestError("Unable to create reservation, please try again later")); 	
			}
		});
	};
}

export function removeReservation(id) { 
	return function (dispatch) {
		var formData={};
		formData._method = 'DELETE';
		axios.post(`${ROOT_URL}/reservations/${id}`, formData, {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({ 
				type: REMOVE_RESERVATION,
				payload: response.data
			});
			browserHistory.push('/reservations');

		})
		.catch(error => {
			dispatch(requestError("Unable to fullfill your request, please try again later"));
		});
	};
}

export function fetchReservationFormParams() {  

	return function(dispatch) {
		axios.get(`${ROOT_URL}/reservations/form`, {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({ 
				type: FETCH_RESERVATION_FORM_PARAMS,
				payload: response.data
			});
		})
		.catch(error => {
			dispatch(requestError("Unable to fullfill your request, please try again later"));
		});
	};
}

export function fetchReservations(formData) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/reservations/search`, formData ,{
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({ 
				type: FETCH_RESERVATIONS,
				payload: response.data
			});
		})
		.catch(error => {
			dispatch(requestError("Unable to fullfill your request, please try again later"));
		});
	};
}
