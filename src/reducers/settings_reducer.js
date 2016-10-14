import {
	FETCH_SETTINGS,
	UPDATE_SETTINGS
} from '../actions/types';

export default function (state = {}, action) {

	switch(action.type) {
		case FETCH_SETTINGS:
			console.log(action.payload.data);
			return { ...state, settings: action.payload.data };	
	}

	return state;
}
