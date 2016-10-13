import { ROOM_TYPES, CHECK_AVAILABILITY, LOADING, REQUEST_SUCCESS, REQUEST_ERROR, SETTINGS } from '../actions/types';


export default function (state = { availability:null, availability_status:'' }, action) {
	switch(action.type) {
		case ROOM_TYPES:
			return { ...state, room_types: action.payload.data};
		case CHECK_AVAILABILITY:
			return { ...state, availability: action.payload.dates, availability_status:action.payload.status};
		case LOADING:
			return { ...state, loading: action.payload };
		case REQUEST_ERROR:
			return { ...state, error: action.payload };
		case REQUEST_SUCCESS:
			return { ...state, error: '', success: action.payload };
		case SETTINGS:
			return { ...state, settings: action.payload.data };	
	 default: return state;
	}

	return state;
}
