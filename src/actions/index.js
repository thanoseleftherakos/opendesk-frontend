import axios from 'axios';
import { browserHistory } from 'react-router';
import {  REQUEST_ERROR, REQUEST_SUCCESS } from './types';

const ROOT_URL = 'http://dev.webf8.net/hotelapi/public';


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

