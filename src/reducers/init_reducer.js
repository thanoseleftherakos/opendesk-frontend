import {
	INIT
} from '../actions/types';

export default function (state = {}, action) {
	switch(action.type) {
		case INIT:
			return { ...state, user: action.payload.data.user, hotel: action.payload.data.hotel };	
	}

	return state;
}
