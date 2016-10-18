import React, {Component} from 'react';
import { connect } from 'react-redux';
import Notifications from './notifications';
import UserProfile from './userprofile';

class Topmenu extends Component {
	render() {
		if(!this.props.hotel) {
            return <span></span>
        }
		return (
			<div className="page-top">
				<div className="top-menu">
				<ul className="nav navbar-nav pull-left hotel-logo">
				<li><img src={this.props.hotel.logo} alt=""/></li>
				</ul>
	                <ul className="nav navbar-nav pull-right">
	                    <Notifications />
	                    <UserProfile />
	                </ul>
	                <div className="clearfix"></div>
	            </div>
            </div>
		);
	}
}
function mapStateToProps(state) {
    return { 
        hotel: state.init.hotel
     };
}

export default connect(mapStateToProps)(Topmenu);