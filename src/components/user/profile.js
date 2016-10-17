import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, addArrayValue } from 'redux-form';
import TextInput from './../UI/forms/textinput';
import { updateUser } from '../../actions/userProfileActions';
import Loader from './../UI/loader';
import { I18n } from 'react-redux-i18n';

class Profile extends Component { 
    
    componentDidUpdate(){
        App.init();
        Layout.init();
    }
    handleFormSubmit(formProps) {
        console.log(formProps);
        this.props.updateUser(formProps);
    }

    render() {
        if(!this.props.userProfile) {
            return <Loader />;
        }
        const { handleSubmit, fields: { name, email, change_password, old_password, new_password, new_password_again } } = this.props;
        return(
            <div>
                <h1 className="page-title">{I18n.t('general.my_profile')}</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="portlet light bordered">
                            <div className="portlet-title">
                                <div className="caption font-green">
                                    <i className="icon-settings font-green"></i>
                                    <span className="caption-subject bold uppercase"> {I18n.t('general.edit_profile')}</span>
                                </div>
                            </div>
                            <div className="portlet-body form">
                                <form role="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                    <div className="form-body">
                                        <TextInput type="text" name={I18n.t('forms.name')} data={name} />
                                        <TextInput type="email" name={I18n.t('forms.email')} data={email} />
                                        <input type="checkbox" {...change_password} />Change Password
                                        {change_password.value && 
                                            <div>
                                                <br/> 
                                                <TextInput type="password" name={I18n.t('forms.old_password')} data={old_password} />
                                                <TextInput type="password" name={I18n.t('forms.new_password')} data={new_password} />   
                                                <TextInput type="password" name={I18n.t('forms.new_password_again')} data={new_password_again} />   
                                            </div>
                                        }
                                    </div>
                                    <div className="form-actions noborder">
                                        <button type="submit" className="btn blue">{I18n.t('forms.update')}</button>
                                    </div>
                                </form>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        userProfile: state.user.profile,
        initialValues: state.user.profile,
        lang: state.i18n
    };
}

function validate(formProps, props) {
    const errors = {};

    if (!formProps.name) {
        errors.name = 'Please enter a name';
    }
    if (formProps.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)) {
        errors.email = 'Invalid email address';
    }
    if(formProps.change_password){
        if (!formProps.old_password) {
            errors.old_password = 'Please enter a password';
        } else if (formProps.old_password.length < 6) {
            errors.old_password = 'Password must be at least 6 characters';
        }

        if (!formProps.new_password) {
            errors.new_password = 'Please enter a password';
        } else if (formProps.new_password.length < 6) {
            errors.new_password = 'Password must be at least 6 characters';
        }

        if (!formProps.new_password_again) {
            errors.new_password_again = 'Please enter a password';
        } else if (formProps.new_password_again.length < 6) {
            errors.new_password_again = 'Password must be at least 6 characters';
        }

        if(formProps.new_password != formProps.new_password_again){
            errors.new_password_again = "Passwords doesn't much";
        }
    }
    

    return errors;
}

export default reduxForm({
    
    form: 'edit_reservation',
    fields: ['name', 'email', 'new_password', 'old_password', 'new_password_again', 'change_password'],
    validate

}, mapStateToProps, { updateUser })(Profile);