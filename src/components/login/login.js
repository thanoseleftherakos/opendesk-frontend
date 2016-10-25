import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import LoginForm from './loginform';
import SignupForm from './signupform';
import ForgotForm from './forgotform';
var logo = require('../../theme/opendesk_logo_blue.png');

class Login extends Component {
    componentWillMount(){
        if(this.props.authenticated) {
            browserHistory.push('/hotel/dashboard');
        }
    }
    componentDidMount(){
        document.title = "Login";

    }
    render() {

        return (
            <div className="login">
                <div className="logo">
                    <a href="/login">
                        <img src={logo} alt="" /> </a>
                </div>
                <div className="content">
                    <LoginForm />
                    <ForgotForm />
                    <SignupForm />
                </div>
                <div className="copyright">created by Thanos Eleftherakos. </div>
        	</div>
        );
    }
}

function mapStateToProps(state) {
    return {authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Login);
