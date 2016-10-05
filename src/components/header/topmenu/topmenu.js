import React, {Component} from 'react';
import Notifications from './notifications';
import UserProfile from './userprofile';

class Topmenu extends Component {
	render() {
		return (
			<div className="page-top">
				<div className="top-menu">
	                <ul className="nav navbar-nav pull-right">
	                    <Notifications />
	                    <UserProfile />
	                </ul>
	            </div>
            </div>
		);
	}
}
export default Topmenu;