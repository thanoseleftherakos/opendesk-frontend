import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	REQUEST_SUCCESS,
	REQUEST_ERROR,
	LOADING
} from '../actions/types';

export default function (state = {}, action) {
	switch(action.type) {
		case AUTH_USER:
			return { ...state, error: '', authenticated: true };
		case UNAUTH_USER:
			return { ...state, authenticated: false };
		case AUTH_ERROR:
			return { ...state, error: action.payload };
		case REQUEST_ERROR:
			return { ...state, error: action.payload };
		case REQUEST_SUCCESS:
			return { ...state, error: '', success: action.payload.data };
		case LOADING:
			return { ...state, loading: action.payload };
	}

	return state;
}
