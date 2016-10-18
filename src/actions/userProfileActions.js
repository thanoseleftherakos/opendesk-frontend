import axios from 'axios';
import { browserHistory } from 'react-router';
import { FETCH_USER_PROFILE, LOADING, INIT } from './types';
import { requestSuccess, requestError } from './index';

const ROOT_URL = 'http://dev.webf8.net/hotelapi/public';

export function updateUser(formData) { 
	return function (dispatch) {
		dispatch({ type: LOADING, payload: true });
		formData._method = 'PUT';
		axios.post(`${ROOT_URL}/user`, formData ,{
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({ type: LOADING, payload: false });
			dispatch(requestSuccess(response.data.message)); 
			dispatch({ type: INIT, payload: response.data}); 
		})
		.catch(error => {
			dispatch({ type: LOADING, payload: false });
			dispatch(requestError("Error updating user")); 	
			if(error.response.status == 401) {
				localStorage.removeItem('token');
				browserHistory.push('/login');	
			}
			if(error.response.data.code == 422) { //validation
				dispatch(requestError("Please fill all the required fields")); 	
			}
			else{

				dispatch(requestError(error.response.data.message)); 	
			}
		});
	};
}