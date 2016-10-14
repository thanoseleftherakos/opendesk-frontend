import {
	FETCH_USER_PROFILE
} from '../actions/types';

export default function (state = {}, action) {

	switch(action.type) {
		case FETCH_USER_PROFILE:
			return { ...state, profile: action.payload.data };	
	}

	return state;
}
