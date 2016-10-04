import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import dashboardReducer from './dashboard_reducer';
import reservationsReducer from './reservations_reducer';
import { i18nReducer } from 'react-redux-i18n';

const rootReducer = combineReducers({
	form, //ES6 form: form
	auth: authReducer,
	dashboard: dashboardReducer,
	reservations: reservationsReducer,
	i18n: i18nReducer
});

export default rootReducer;
