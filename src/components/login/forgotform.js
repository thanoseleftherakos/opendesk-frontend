import React, {Component} from 'react';


class ForgotForm extends Component {
	render() {
		return (
            <form className="forget-form" action="index.html" method="post">
                <h3 className="font-green">Forget Password ?</h3>
                <p> Enter your e-mail address below to reset your password. </p>
                <div className="form-group">
                    <input className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Email" name="email" /> </div>
                <div className="form-actions">
                    <button type="button" id="back-btn" className="btn btn-default">Back</button>
                    <button type="submit" className="btn btn-success uppercase pull-right">Submit</button>
                </div>
            </form>
		);
	}
}

export default ForgotForm;