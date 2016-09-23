import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions'

class UserProfile extends Component {
	render() {
		return (
			<li className="dropdown dropdown-user">
                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                    <img alt="" className="img-circle" src="src/theme/layouts/layout/img/avatar3_small.jpg" />
                    <span className="username username-hide-on-mobile"> Nick </span>
                    <i className="fa fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-default">
                    <li>
                        <a href="page_user_profile_1.html">
                            <i className="icon-user"></i> My Profile </a>
                    </li>
                    <li>
                        <a href="app_calendar.html">
                            <i className="icon-calendar"></i> My Calendar </a>
                    </li>
                    <li>
                        <a href="app_inbox.html">
                            <i className="icon-envelope-open"></i> My Inbox
                            <span className="badge badge-danger"> 3 </span>
                        </a>
                    </li>
                    <li>
                        <a href="app_todo.html">
                            <i className="icon-rocket"></i> My Tasks
                            <span className="badge badge-success"> 7 </span>
                        </a>
                    </li>
                    <li className="divider"> </li>
                    <li>
                        <a href="page_user_lock_1.html">
                            <i className="icon-lock"></i> Lock Screen </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => this.props.logoutUser()} >
                            <i className="icon-key"></i> Log Out </a>
                    </li>
                </ul>
            </li>
		);
	}
}
function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(UserProfile);