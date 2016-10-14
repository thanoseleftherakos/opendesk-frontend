import { ROOM_TYPES, CHECK_AVAILABILITY, LOADING, REQUEST_SUCCESS, REQUEST_ERROR, SETTINGS } from '../actions/types';


export default function (state = { availability:null, availability_status:'',success:"" }, action) {
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
	 default: return state;
	}

	return state;
}
