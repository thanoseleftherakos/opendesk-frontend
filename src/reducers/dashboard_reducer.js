import { FETCH_DASHBOARD } from '../actions/types';


export default function (state = {}, action) {
	switch(action.type) {
		case FETCH_DASHBOARD:
			return { ...state, dashboard: action.payload.data, loading: false };
	 default: return state;
	}

	return state;
}
