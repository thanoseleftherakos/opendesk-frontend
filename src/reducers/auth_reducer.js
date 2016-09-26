import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	FETCH_DASHBOARD,
	FETCH_RESERVATION,
	REQUEST_SUCCESS,
	REQUEST_ERROR
} from '../actions/types';

export default function (state = {}, action) {
	switch(action.type) {
		case AUTH_USER:
			return { ...state, error: '', authenticated: true };
		case UNAUTH_USER:
			return { ...state, authenticated: false };
		case AUTH_ERROR:
			return { ...state, error: action.payload };
		case FETCH_DASHBOARD:
			return { ...state, dashboard: action.payload.data };
		case FETCH_RESERVATION:
			return { ...state, reservation: action.payload.data };
		case REQUEST_ERROR:
			return { ...state, error: action.payload };
		case REQUEST_SUCCESS:
			return { ...state, success: action.payload.data };
	}

	return state;
}
