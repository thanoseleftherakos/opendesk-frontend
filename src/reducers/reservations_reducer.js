import _ from 'lodash';
import {
	FETCH_RESERVATION,
	FETCH_RESERVATION_FORM_PARAMS,
	FETCH_RESERVATIONS,
	REMOVE_RESERVATION
} from '../actions/types';


export default function (state = {}, action) {
	switch(action.type) {
		case FETCH_RESERVATION:
			return { ...state, reservation: action.payload.data };
		case FETCH_RESERVATION_FORM_PARAMS:
			return { ...state, reservationformparams: action.payload.data };
		case FETCH_RESERVATIONS:
			return { ...state, reservations: action.payload};
		case REMOVE_RESERVATION:
		const index = _.findIndex(state.reservations, {id : action.id});
			return { ...state, reservations:[ ...state.reservations.slice(0, index), ...state.reservations.slice(index + 1)  ]};
	}

	return state;
}
