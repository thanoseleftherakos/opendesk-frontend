import axios from 'axios';
import { browserHistory } from 'react-router';
import { CHECK_AVAILABILITY, LOADING } from './types';

const ROOT_URL = 'http://dev.webf8.net/hotelapi/public';


export function checkAvailability(formData) {
	return function (dispatch) {
		dispatch({ type: LOADING, payload: true });
		axios.post(`${ROOT_URL}/reservations/check_availability`, formData,  {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			console.log(response.data);
			dispatch({ type: LOADING, payload: false });
			dispatch({ 
				type: CHECK_AVAILABILITY,
				payload: response.data
			});
		})
		.catch(error => {
			dispatch({ type: LOADING, payload: false });
			if(error.response.status == 401) {
				localStorage.removeItem('token');
				browserHistory.push('/login');	
			}
			
		});
	};
}