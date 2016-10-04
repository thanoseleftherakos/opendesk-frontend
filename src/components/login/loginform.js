import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { loginUser, authError } from '../../actions/authActions';

class LoginForm extends Component {
    handleFormSubmit({ email, password }) {
        this.props.authError('');
        this.props.loginUser({ email, password });
    }
    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger display-show">
                    {this.props.errorMessage}
                </div>
            );
        }
    }

	render() {
        const { handleSubmit, fields: { email, password } } = this.props;

		return (
            <form className="login-form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <h3 className="form-title font-green">Sign In</h3>
                { this.renderAlert() }
                <div className={'form-group ' + (email.error ? 'has-error' : '')}>
                    <label className="control-label visible-ie8 visible-ie9">Email</label>
                    <input className="form-control form-control-solid placeholder-no-fix" type="email" autoComplete="off" placeholder="Email" {...email} /> 
                    {email.touched && email.error && <span className="help-block">{email.error}</span>}
                </div>
                <div className={'form-group ' + (password.error ? 'has-error' : '')}>
                    <label className="control-label visible-ie8 visible-ie9">Password</label>
                    <input className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="Password" {...password} /> 
                    {password.touched && password.error && <span className="help-block">{password.error}</span>} 
                </div>
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

function validate (formProps) {
    const errors = {};
    if (!formProps.password) {
        errors.password = 'Required';
    }
    if (!formProps.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;

}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'login',
    fields: ['email', 'password'],
    validate
}, mapStateToProps, { loginUser, authError })(LoginForm);
