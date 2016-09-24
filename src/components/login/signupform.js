import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignupForm extends Component {
    handleFormSubmit(formProps) {
        this.props.signupUser(formProps);
    }
    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div>{this.props.errorMessage}</div>
            );
        }
    }

	render() {
        const { handleSubmit, fields: { email, password, name, total_rooms, username, rpassword } } = this.props;

		return (
            <form className="register-form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <h3 className="font-green">Sign Up</h3>
                <p className="hint"> Enter hotel details below: </p>
                <div className={'form-group ' + (name.error ? 'has-error' : '')}>
                    <label className="control-label visible-ie8 visible-ie9">Hotel name</label>
                    <input className="form-control placeholder-no-fix" type="text" placeholder="Hotel Name" {...name} /> 
                    {name.touched && name.error && <span className="help-block">{name.error}</span>}
                </div>
                <div className={"form-group " + (email.error ? 'has-error' : '')}>
                    <label className="control-label visible-ie8 visible-ie9">Email</label>
                    <input className="form-control placeholder-no-fix" type="text" placeholder="Email" {...email} />
                    {email.touched && email.error && <span className="help-block">{email.error}</span>} 
                </div>
                <div className={"form-group " + (total_rooms.error ? 'has-error' : '')}>
                    <label className="control-label visible-ie8 visible-ie9">Total Rooms</label>
                    <input className="form-control placeholder-no-fix" type="number" placeholder="total rooms" {...total_rooms} /> 
                    {total_rooms.touched && total_rooms.error && <span className="help-block">{total_rooms.error}</span>} 
                </div>
                <p className="hint"> Enter your account details below: </p>
                <div className={"form-group " + (username.error ? 'has-error' : '')}>
                    <label className="control-label visible-ie8 visible-ie9">Username</label>
                    <input className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Username" {...username} />
                    {username.touched && username.error && <span className="help-block">{username.error}</span>}  
                </div>
                <div className="form-group ">
                    <label className="control-label visible-ie8 visible-ie9">Password</label>
                    <input className="form-control placeholder-no-fix" type="password" autoComplete="off" id="register_password" placeholder="Password" {...password} /> 
                </div>
                <div className={"form-group " + (rpassword.error ? 'has-error' : '')}>
                    <label className="control-label visible-ie8 visible-ie9">Re-type Your Password</label>
                    <input className="form-control placeholder-no-fix" type="password" autoComplete="off" placeholder="Re-type Your Password" {...rpassword} /> 
                    {rpassword.touched && rpassword.error && <span className="help-block">{rpassword.error}</span>}
                </div>
                    
                <div className="form-group margin-top-20 margin-bottom-20">
                    <label className="check">
                        <input type="checkbox" name="tnc" /> I agree to the
                        <a href="javascript:;"> Terms of Service </a> &
                        <a href="javascript:;"> Privacy Policy </a>
                    </label>
                    <div id="register_tnc_error"> </div>
                </div>
                {this.renderAlert()} asdf
                <div className="form-actions">
                    <button type="button" id="register-back-btn" className="btn btn-default">Back</button>
                    <button type="submit" id="register-submit-btn" className="btn btn-success uppercase pull-right">Submit</button>
                </div>
            </form>
		);
	}
}


function validate(formProps) {
    const errors = {};

    if (formProps.password !== formProps.rpassword) {
        errors.rpassword = 'Passwords must match!';
    }
    if (!formProps.name) {
        errors.name = 'Required';
    }
    if (!formProps.username) {
        errors.username = 'Required';
    }
    if (!formProps.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)) {
        errors.email = 'Invalid email address';
    }
    if (!formProps.total_rooms) {
        errors.total_rooms = 'Required';
    } else if (isNaN(Number(formProps.total_rooms))) {
        errors.total_rooms = 'Must be a number';
    }

    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({

    form: 'signup',
    fields: ['name', 'email', 'total_rooms', 'username', 'password', 'rpassword'],
    validate

}, mapStateToProps, actions)(SignupForm);
