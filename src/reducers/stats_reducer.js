import {
	FETCH_STATS
} from '../actions/types';

export default function (state = {}, action) {

	switch(action.type) {
		case FETCH_STATS:
			return { ...state, statistics: action.payload.data };	
	}

	return state;
}
