import { ROOM_TYPES, CHECK_AVAILABILITY } from '../actions/types';


export default function (state = { availability:null, availability_status:'' }, action) {
	switch(action.type) {
		case ROOM_TYPES:
			return { ...state, room_types: action.payload.data};
		case CHECK_AVAILABILITY:
			return { ...state, availability: action.payload.dates, availability_status:action.payload.status};
	 default: return state;
	}

	return state;
}
