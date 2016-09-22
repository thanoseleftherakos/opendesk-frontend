import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class LoginForm extends Component {
    handleFormSubmit({ email, password }){
        this.props.loginUser({ email, password });
    }
    renderAlert() {
        if(this.props.errorMessage){
            return (
                <div className="alert alert-danger display-show">
                    {this.props.errorMessage}
                </div>
            )
        }
    }

	render() {
        const { handleSubmit, fields: { email, password }} = this.props;

		return (
            <form className="login-form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <h3 className="form-title font-green">Sign In</h3>
                { this.renderAlert() }
                <div className="alert alert-danger display-hide">
                    <button className="close" data-close="alert"></button>
                    <span> Enter any username and password. </span>
                </div>
                <div className="form-group">
                    <label className="control-label visible-ie8 visible-ie9">Email</label>
                    <input className="form-control form-control-solid placeholder-no-fix" type="email" autoComplete="off" placeholder="Email" {...email} /> </div>
                <div className="form-group">
                    <label className="control-label visible-ie8 visible-ie9">Password</label>
                    <input className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="Password" {...password} /> </div>
                <div className="form-actions">
                    <button type="submit" className="btn green uppercase">Login</button>
                    <label className="rememberme check">
                        <input type="checkbox" name="remember" value="1" />Remember </label>
                    <a href="javascript:;" id="forget-password" className="forget-password">Forgot Password?</a>
                </div>
                <div className="create-account">
                    <p>
                        <a href="javascript:;" id="register-btn" className="uppercase">Create an account</a>
                    </p>
                </div>
            </form>
		);
	}
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'login',
    fields: ['email','password']
},mapStateToProps, actions)(LoginForm);