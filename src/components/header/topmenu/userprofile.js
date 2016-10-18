import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';
import { Link } from 'react-router'
import Loader from '../../UI/loader';

class UserProfile extends Component {
	render() {
        if(!this.props.user) {
            return <span></span>
        }
		return (
			<li className="dropdown dropdown-user">
                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                    <span className="username username-hide-on-mobile"><i className="icon-user icons"></i>  {this.props.user.name} </span>
                    <i className="fa fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-default">
                    <li>
                    <Link to={"/hotel/user"} className="">
                        <i className="icon-user"></i> My Profile
                    </Link>
                    </li>
                    <li>
                        <a href="javascript:;" onClick={() => this.props.logoutUser()} >
                            <i className="icon-key"></i> Log Out </a>
                    </li>
                </ul>
            </li>
		);
	}
}
function mapStateToProps(state) {
    return { 
        authenticated: state.auth.authenticated,
        user: state.init.user
     };
}

export default connect(mapStateToProps, { logoutUser })(UserProfile);
