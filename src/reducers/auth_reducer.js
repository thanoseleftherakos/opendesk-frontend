import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	FETCH_DASHBOARD,
	FETCH_RESERVATION,
	REQUEST_SUCCESS,
	REQUEST_ERROR,
	FETCH_RESERVATION_FORM_PARAMS,
	FETCH_RESERVATIONS,
	REMOVE_RESERVATION,
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
		case FETCH_DASHBOARD:
			return { ...state, dashboard: action.payload.data, loading: false };
		case FETCH_RESERVATION:
			return { ...state, reservation: action.payload.data, loading: false };
		case REQUEST_ERROR:
			return { ...state, error: action.payload };
		case REQUEST_SUCCESS:
			return { ...state, error: '', success: action.payload.data };
		case FETCH_RESERVATION_FORM_PARAMS:
			return { ...state, reservationformparams: action.payload.data };
		case FETCH_RESERVATIONS:
			return { ...state, reservations: action.payload, loading: false };
		case REMOVE_RESERVATION:
			return { ...state, error:'' ,success: action.payload.data, loading: false };
		case LOADING:
			return { ...state, loading: action.payload };
	}

	return state;
}
