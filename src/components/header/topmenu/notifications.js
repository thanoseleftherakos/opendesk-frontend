import React, {Component} from 'react';
import { connect } from 'react-redux';
import Loader from './../../UI/loader';
import _ from 'lodash';

class Notifications extends Component {
    renderNotifications(){

        console.log(this.props.dashboard);
        var room_numbers = new Array();
        this.props.dashboard.current_rooms.forEach(function(room) {
            room_numbers.push(room.room_number);
        });
        console.log(this.hasDuplicates(room_numbers));

    }
    hasDuplicates(a) {
        return _.uniq(a).length !== a.length; 
    }
	render() {
        if(!this.props.dashboard){
            return <span></span>
        }

		return (
			<li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                    <i className="icon-bell"></i>
                    <span className="badge badge-default"> 1 </span>
                </a>
                <ul className="dropdown-menu">
                    <li className="external">
                        <h3>
                            <span className="bold">1 pending</span> notification</h3>
                        <a href="page_user_profile_1.html">view all</a>
                    </li>
                    <li>
                        <ul className="dropdown-menu-list scroller" data-handle-color="#637283">
                            <li>
                                <a href="javascript:;">
                                    <span className="time">just now</span>
                                    <span className="details">
                                        <span className="label label-sm label-icon label-success">
                                            <i className="fa fa-plus"></i>
                                        </span> New user registered. </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                {this.renderNotifications()}
            </li>
		);
	}
}

function mapStateToProps(state) {
    return { 
        dashboard: state.dashboard.dashboard
    };
}

export default connect(mapStateToProps)(Notifications);