import axios from 'axios';
import { browserHistory } from 'react-router';
import { FETCH_SETTINGS, UPDATE_SETTINGS, LOADING } from './types';
import { requestSuccess, requestError } from './index';

const ROOT_URL = 'http://dev.webf8.net/hotelapi/public';


export function fetchSettings() {
	return function (dispatch) {
		axios.get(`${ROOT_URL}/settings`,  {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({ 
				type: FETCH_SETTINGS,
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

export function updateSettings(formData) {
	return function (dispatch) {
		console.log(formData.logo);
		dispatch({ type: LOADING, payload: true });
		axios.post(`${ROOT_URL}/settings`, formData, {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({ type: LOADING, payload: false });
			dispatch({ 
				type: FETCH_SETTINGS,
				payload: response.data
			});
			dispatch(requestSuccess(response.data.message)); 
		})
		.catch(error => {
			dispatch({ type: LOADING, payload: false });
			dispatch(requestError(error.response.data.message)); 
			if(error.response.status == 401) {
				localStorage.removeItem('token');
				browserHistory.push('/login');	
			}
		});
	};
}