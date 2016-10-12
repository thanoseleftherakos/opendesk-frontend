import axios from 'axios';
import { browserHistory } from 'react-router';
import { FETCH_RESERVATION, FETCH_RESERVATION_FORM_PARAMS, FETCH_RESERVATIONS, REMOVE_RESERVATION, LOADING, REQUEST_ERROR, REQUEST_SUCCESS } from './types';

const ROOT_URL = 'http://dev.webf8.net/hotelapi/public';

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
			if(error.response.status == 401) {
				localStorage.removeItem('token');
				browserHistory.push('/login');	
			}
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
			dispatch(requestSuccess(response.data.message)); 
			browserHistory.push(`/hotel/reservations/${response.data.data}`);
		})
		.catch(error => {
			if(error.response.status == 401) {
				localStorage.removeItem('token');
				browserHistory.push('/login');	
			}
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
			dispatch(requestSuccess(response.data.message)); 
			browserHistory.push(`/hotel/reservations/${response.data.data}`);
		})
		.catch(error => {
			if(error.response.status == 401) {
				localStorage.removeItem('token');
				browserHistory.push('/login');	
			}
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
				payload: response.data,
				id
			});
			browserHistory.push('/hotel/reservations');

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
		dispatch({ type: LOADING, payload: true });
		axios.post(`${ROOT_URL}/reservations/search`, formData ,{
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({ type: LOADING, payload: false });
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