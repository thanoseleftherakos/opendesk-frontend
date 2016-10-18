import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, addArrayValue } from 'redux-form';
import { Link } from 'react-router';
import TextInput from './../UI/forms/textinput';
import SelectOption from './../UI/forms/selectoption';
import DatePickerField from './../UI/forms/datepicker';
import { fetchSettings, updateSettings } from '../../actions/settingsActions';
import moment from "moment";
import Loader from './../UI/loader';
import Alert from '../UI/alerts';
import ReservationsTable from './../UI/reservations_table';
import { I18n } from 'react-redux-i18n';

class Settings extends Component { 
    
    componentWillMount(){
        if(!this.props.hotel_settings){
            this.props.fetchSettings();
        }
    }
    componentDidUpdate(){
        App.init();
        Layout.init();
    }
    componentDidMount(){
        document.title = "Hotel Settings";
    }
	handleFormSubmit(formProps) {
        this.props.updateSettings(formProps);
    }

	render() {
		const { handleSubmit, submitting, fields: { name, email, total_rooms, room_types, deleted, logo } } = this.props;
        if(!this.props.hotel_settings) {
            return <Loader /> 
        }
		return(
			<div>
                <h1 className="page-title">{I18n.t('general.settings')}</h1>
                <div className="row">
	                <div className="col-md-12">
                        <div className="portlet light bordered">
                            <div className="portlet-title">
                                <div className="caption font-green">
                                    <i className="icon-settings font-green"></i>
                                    <span className="caption-subject bold uppercase"> {I18n.t('general.edit_hotel')}</span>
                                </div>
                            </div>
                            <div className="portlet-body form">
                                <form role="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                    <div className="form-body">
                                        <TextInput type="text" name={I18n.t('forms.name')} data={name} />
                                        <TextInput type="email" name={I18n.t('forms.email')} data={email} />
                                        <TextInput type="number" name={I18n.t('forms.total_rooms')} disabled="true" data={total_rooms} />
                                        {this.props.hotel_settings.logo && 
                                            <img className="logo" src={this.props.hotel_settings.logo} alt=""/>
                                        }
                                        <input type="file" {...logo} value={ null } />
                                        <br/>
                                        <div className="portlet light bg-inverse">
                                            <div className="portlet-title">
                                                <div className="caption font-green">
                                                    <span className="caption-subject bold uppercase"> {I18n.t('forms.room_types')}</span>
                                                </div>
                                            </div>
                                            <TextInput type="hidden" name='' data={deleted} />
                                            {room_types.map((type, index) => 
                                                <div key={type.name + index} className="row">
                                                    <input type="hidden" name='id' value={type.id.value} />
                                                    <div className="col-xs-4">
                                                        <TextInput type="text" name={I18n.t('forms.name')} data={type.name} />
                                                    </div>
                                                    <div className="col-xs-4">
                                                        <TextInput type="number" name={I18n.t('forms.amount')} data={type.amount} />
                                                    </div>
                                                    <div className="col-xs-4">
                                                        <button type="button" className="btn red top btn-icon-only" onClick={() => {
                                                            room_types.removeField(index); // remove from index
                                                            (type.id.value ? deleted.addField({id: type.id.value}) : '');
                                                          }}><i className="icon-close"/>
                                                          </button>
                                                    </div>
                                                </div>
                                            )}
                                            <br/>
                                            <button type="button" className="btn green-haze" onClick={() => {
                                                room_types.addField({name:'', amount:''});    // pushes empty child field onto the end of the array
                                                }}><i className="icon-plus"></i>{I18n.t('forms.add_room_type')}
                                            </button>
                                        </div>
                                        <div className="form-actions noborder">
                                            <button type="submit" disabled={submitting} className="btn blue">
                                                {I18n.t('forms.update')}
                                            </button>
                                        </div>

                                        
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
        hotel_settings: state.hotel_settings.settings,
        initialValues: state.hotel_settings.settings,
        lang: state.i18n
	};
}

function validate(formProps) {
    const errors = {};

    if (!formProps.name) {
        errors.name = I18n.t('forms.required');
    }

    if (!formProps.email) {
        errors.email = I18n.t('forms.required');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)) {
        errors.email = I18n.t('forms.invalid_email_address');
    }

    const typesArrayErrors = [];
    var totalAmount = 0;
    formProps.room_types.map((type, index) => {
        const typesErrors = {}
        if (!type.name) {
            typesErrors.name = I18n.t('forms.required')
            typesArrayErrors[index] = typesErrors
        }
        if (!type.amount) {
            typesErrors.amount = I18n.t('forms.required')
            typesArrayErrors[index] = typesErrors
        } else if(isNaN(Number(type.amount))) {
            typesErrors.amount = I18n.t('forms.must_be_a_number')
            typesArrayErrors[index] = typesErrors
        }
        totalAmount += type.amount;
        if(totalAmount > formProps.total_rooms){
            typesErrors.amount = I18n.t('you dont have that number of rooms')
            typesArrayErrors[index] = typesErrors
        }
        return typesErrors
    })
    if(typesArrayErrors.length) {
      errors.room_types = typesArrayErrors
    }

    return errors;
}

export default reduxForm({
    
    form: 'edit_reservation',
    fields: ['name', 'email', 'total_rooms', 'logo', 'room_types[].id', 'room_types[].name', 'room_types[].amount', 'deleted[].id'],
    validate

}, mapStateToProps, { fetchSettings, updateSettings })(Settings);