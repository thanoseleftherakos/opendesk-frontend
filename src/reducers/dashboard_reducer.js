import { DASHBOARD } from '../actions/types';


export default function (state = {}, action) {
	// console.log('dashboard' + action.type);
	switch(action.type) {
		case DASHBOARD:
			return { ...state, dashboard: action.payload };
			break;
	}

	return state;
}
