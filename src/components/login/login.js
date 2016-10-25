import React, { Component } from 'react';
import LoginForm from './loginform';
import SignupForm from './signupform';
import ForgotForm from './forgotform';
var logo = require('../../theme/opendesk_logo_blue.png');

export default class Login extends Component {
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

