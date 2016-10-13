import axios from 'axios';
import { browserHistory } from 'react-router';
import {  REQUEST_ERROR, REQUEST_SUCCESS, CHANGE_LANGUAGE, ROOM_TYPES, SETTINGS } from './types';
import { setLocale } from 'react-redux-i18n';
import moment from "moment";
import en from "moment/locale/en-gb";
import el from "moment/locale/el";

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


export function changeLanguage(lang) {
	return function (dispatch) {
		moment.updateLocale(lang, lang);
		localStorage.setItem('lang', lang);
		dispatch(setLocale(lang));
	}
}


export function roomTypes() {
	return function (dispatch) {
		axios.get(`${ROOT_URL}/room_types`,  {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({ 
				type: ROOM_TYPES,
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

export function settings() {
	return function (dispatch) {
		axios.get(`${ROOT_URL}/settings`,  {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({ 
				type: SETTINGS,
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

