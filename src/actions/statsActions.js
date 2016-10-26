import axios from 'axios';
import { browserHistory } from 'react-router';
import { FETCH_STATS, LOADING } from './types';

const ROOT_URL = 'http://dev.webf8.net/hotelapi/public';


export function fetchStats(formData) {
	return function (dispatch) {
		dispatch({ type: LOADING, payload: true });
		axios.post(`${ROOT_URL}/statistics`, formData, {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({ type: LOADING, payload: false });
			dispatch({ 
				type: FETCH_STATS,
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