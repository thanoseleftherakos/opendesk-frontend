import axios from 'axios';
import { browserHistory } from 'react-router';
import { FETCH_USER_PROFILE, LOADING } from './types';
import { requestSuccess, requestError } from './index';

const ROOT_URL = 'http://dev.webf8.net/hotelapi/public';


export function fetchUserProfile() {
	return function (dispatch) {
		console.log("fetch user...");
		axios.get(`${ROOT_URL}/user`,  {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({ 
				type: FETCH_USER_PROFILE,
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
