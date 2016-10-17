import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/reservationsActions';
import Alert from '../UI/alerts';
import moment from "moment";
import Loader from './../UI/loader';
import TextInput from './../UI/forms/textinput';
import DatePickerField from './../UI/forms/datepicker';
import SelectOption from './../UI/forms/selectoption';
import CheckBox from './../UI/forms/checkbox';
import Textarea from './../UI/forms/textarea';
import countries from '../../data/countries';
import { I18n } from 'react-redux-i18n';

require('style!css!sass!react-datepicker/dist/react-datepicker.css'); 

class EditReservation extends Component {
	componentWillMount(){
		this.props.fetchReservation(this.props.params.id);
        
	}
	componentDidUpdate(){
        App.init();
        Layout.init();
    }
    handleFormSubmit(formProps) {
        this.props.editReservation(formProps,this.props.params.id);
    }
    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <Alert type="danger" icon="warning" message={this.props.errorMessage} />
            );
        }
        if(this.props.successMessage) {
         return (
                <Alert type="success" icon="check" message={this.props.successMessage} />
            );   
        }
    }

	render(){
		if(!this.props.reservation) {
			return <Loader />
		}
        const personsArr  = [ { id : "1", name : "1" }, { id : "2", name : "2" }, { id : "3", name : "3" }, { id : "4", name : "4" } ];
		const { handleSubmit, fields: { client_name, client_phone, client_email, country, check_in, check_out, deposit, deposit_amount, persons, price, breakfast, channel_id, room_type_id, status_id, notes, ref_id, room_number } } = this.props;
		return (
			<div>
                <h3 className="page-title">{I18n.t('general.edit')}: {this.props.reservation.client_name}
                    <small> {this.props.reservation.room.name} | 
                    		{this.props.reservation.nights} {I18n.t('general.nights', {count: this.props.reservation.nights})} | 
                    		{this.props.reservation.total_price} € 
                    </small>
                    <span className={'label label-sm label-' + (this.props.reservation.status_type.id==1 ? 'success' : 'danger')}>
                 		{this.props.reservation.status_type.type}
                 	</span> 
                </h3>
                
                <div className="row">
					<div className="col-md-12">
						<div className="portlet light bordered">
                            <div className="portlet-title">
                                <div className="caption font-green">
                                    <i className="icon-settings font-green"></i>
                                    <span className="caption-subject bold uppercase"> {I18n.t('general.edit_reservation')}</span>
                                </div>
                            </div>
                            <div className="portlet-body form">
                                <form role="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                    <div className="form-body">
                                        <TextInput type="text" name={I18n.t('forms.name')} data={client_name} />
                                        <TextInput type="email" name={I18n.t('forms.email')} data={client_email} />
                                        <TextInput type="text" name={I18n.t('forms.phone')} data={client_phone} />
                                        <SelectOption name={I18n.t('forms.country')} data={country} options={countries} />
                                        <DatePickerField 
                                            name="Check In" 
                                            startDate={moment(check_in.value)} 
                                            endDate={moment(check_out.value)} 
                                            selected={moment(check_in.value)} 
                                            data={check_in}/>
                                        <DatePickerField 
                                            name="Check Out" 
                                            startDate={moment(check_in.value)} 
                                            endDate={moment(check_out.value)} 
                                            selected={moment(check_out.value)}
                                            data={check_out}/>
                                        <div className="clearfix"></div>
                                        <SelectOption name={I18n.t('forms.room_type')} data={room_type_id} options={this.props.reservation.room_types} />
                                        <SelectOption name={I18n.t('forms.persons')} data={persons} options={personsArr} />
                                        <TextInput type="number" name={I18n.t('forms.price')} data={price} />
                                        <CheckBox name={I18n.t('forms.breakfast')} data={breakfast} />
                                        <TextInput type="number" name={I18n.t('forms.room_num')} data={room_number} />
                                        <CheckBox name={I18n.t('forms.deposit')} data={deposit} />
                                        {deposit.value !=0 &&
                                            <TextInput type="number" name={I18n.t('forms.deposit_amount')} data={deposit_amount} />
                                        }
                                        <SelectOption name="Channel" data={channel_id} options={this.props.reservation.channels} />   
                                        {(channel_id.value!=4 && channel_id.value!=5) &&
                                            <TextInput type="text" name="Ref.id" data={ref_id} />                                     
                                        }
                                        <SelectOption name={I18n.t('forms.status')} data={status_id} options={this.props.reservation.status_types} />
                                        <Textarea name={I18n.t('forms.notes')} data={notes}/>
                                    </div>
                                    {this.renderAlert()}
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
		reservation: state.reservations.reservation,
		initialValues: state.reservations.reservation,
        lang: state.i18n
	};
}

function validate(formProps) {
    const errors = {};

    if (formProps.deposit && !formProps.deposit_amount) {
        errors.deposit_amount = 'Please enter a deposit amount';
    }

    if (!formProps.client_name) {
        errors.client_name = 'Please enter a name';
    }
    if (!formProps.check_in) {
        errors.check_in = 'Please enter a check in date';
    }
    if (!formProps.check_out) {
        errors.check_out = 'Please enter a check out date';
    }

    if (!formProps.room_type_id) {
        errors.room_type_id = 'Please select a room type';
    }

    if (!formProps.persons) {
        errors.persons = 'Please select the number of persons';
    }

    if (!formProps.price) {
        errors.price = 'Please give a price for the room';
    }

    if (!formProps.channel_id) {
        errors.channel_id = 'Please select a channel';
    }
    if (!formProps.status_id) {
        errors.status_id = 'Please select a room status';
    }
    let check_out = moment(formProps.check_out);
    let check_in = moment(formProps.check_in);
    if(check_out <= check_in) {
        errors.check_out = 'Checkout must be after checkout';
    }

    return errors;
}

export default reduxForm({

    form: 'edit_reservation',
    fields: ['client_name', 'client_email', 'client_phone', 'country', 'check_in', 'check_out', 'deposit', 'deposit_amount', 'persons', 'price', 'breakfast', 'channel_id', 'room_type_id', 'status_id', 'notes', 'ref_id', 'room_number'],
    validate

}, mapStateToProps, actions)(EditReservation);

