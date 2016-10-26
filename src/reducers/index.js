import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import dashboardReducer from './dashboard_reducer';
import reservationsReducer from './reservations_reducer';
import generalReducer from './general_reducer';
import settingsReducer from './settings_reducer';
import userReducer from './userprofile_reducer';
import initReducer from './init_reducer';
import statsReducer from './stats_reducer';
import { i18nReducer } from 'react-redux-i18n';

const rootReducer = combineReducers({
	form, //ES6 form: form
	auth: authReducer,
	hotel_settings: settingsReducer,
	user: userReducer,
	dashboard: dashboardReducer,
	reservations: reservationsReducer,
	statistics: statsReducer,
	general: generalReducer,
	i18n: i18nReducer,
	init: initReducer
});

export default rootReducer;
