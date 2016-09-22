import React, {Component} from 'react';


class SignupForm extends Component {
	render() {
		return (
            <form className="register-form" action="index.html" method="post">
                    <h3 className="font-green">Sign Up</h3>
                    <p className="hint"> Enter your personal details below: </p>
                    <div className="form-group">
                        <label className="control-label visible-ie8 visible-ie9">Full Name</label>
                        <input className="form-control placeholder-no-fix" type="text" placeholder="Full Name" name="fullname" /> </div>
                    <div className="form-group">
                        <label className="control-label visible-ie8 visible-ie9">Email</label>
                        <input className="form-control placeholder-no-fix" type="text" placeholder="Email" name="email" /> </div>
                    <div className="form-group">
                        <label className="control-label visible-ie8 visible-ie9">Address</label>
                        <input className="form-control placeholder-no-fix" type="text" placeholder="Address" name="address" /> </div>
                    <div className="form-group">
                        <label className="control-label visible-ie8 visible-ie9">City/Town</label>
                        <input className="form-control placeholder-no-fix" type="text" placeholder="City/Town" name="city" /> </div>
                    <div className="form-group">
                        <label className="control-label visible-ie8 visible-ie9">Country</label>
                        
                    </div>
                    <p className="hint"> Enter your account details below: </p>
                    <div className="form-group">
                        <label className="control-label visible-ie8 visible-ie9">Username</label>
                        <input className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Username" name="username" /> </div>
                    <div className="form-group">
                        <label className="control-label visible-ie8 visible-ie9">Password</label>
                        <input className="form-control placeholder-no-fix" type="password" autoComplete="off" id="register_password" placeholder="Password" name="password" /> </div>
                    <div className="form-group">
                        <label className="control-label visible-ie8 visible-ie9">Re-type Your Password</label>
                        <input className="form-control placeholder-no-fix" type="password" autoComplete="off" placeholder="Re-type Your Password" name="rpassword" /> </div>
                    <div className="form-group margin-top-20 margin-bottom-20">
                        <label className="check">
                            <input type="checkbox" name="tnc" /> I agree to the
                            <a href="javascript:;"> Terms of Service </a> &
                            <a href="javascript:;"> Privacy Policy </a>
                        </label>
                        <div id="register_tnc_error"> </div>
                    </div>
                    <div className="form-actions">
                        <button type="button" id="register-back-btn" className="btn btn-default">Back</button>
                        <button type="submit" id="register-submit-btn" className="btn btn-success uppercase pull-right">Submit</button>
                    </div>
                </form>
		);
	}
}

export default SignupForm;