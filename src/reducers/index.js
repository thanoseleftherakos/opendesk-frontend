import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import dashboardReducer from './dashboard_reducer';
import reservationsReducer from './reservations_reducer';
import generalReducer from './general_reducer';
import settingsReducer from './settings_reducer';
import { i18nReducer } from 'react-redux-i18n';

const rootReducer = combineReducers({
	form, //ES6 form: form
	auth: authReducer,
	hotel_settings: settingsReducer,
	dashboard: dashboardReducer,
	reservations: reservationsReducer,
	general: generalReducer,
	i18n: i18nReducer
});

export default rootReducer;
