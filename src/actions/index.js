import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://dev.webf8.net/hotelapi/public';


export function loginUser({ email, password }) {
	return function(dispatch) {
		//Submit to server
		axios.post(`${ROOT_URL}/auth/login`, { email, password })
		.then( response => {
			dispatch({ type: AUTH_USER });

			localStorage.setItem('token',response.data.token);

			browserHistory.push('/dashboard');
		})
		.catch(()=> {

			dispatch(authError('Bad login info')); //to be changed!!!!!

		});


	}

}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}