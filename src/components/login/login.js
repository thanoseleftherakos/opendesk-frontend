import React, { Component } from 'react';

import LoginForm from './loginform';
import SignupForm from './signupform';
import ForgotForm from './forgotform';

export default class Login extends Component {
  render() {
    return (
    	<div>
            <div className="logo">
                <a href="index.html">
                    <img src="../assets/pages/img/logo-big.png" alt="" /> </a>
            </div>
            <div className="content">
                <LoginForm />
                <ForgotForm />
                <SignupForm />
            </div>
            <div className="copyright"> 2014 © Metronic. Admin Dashboard Template. </div>
    	</div>
    );
  }
}

