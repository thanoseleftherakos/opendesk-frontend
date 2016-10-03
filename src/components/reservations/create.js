import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import Alert from '../UI/alerts';
import DatePicker from 'react-datepicker';
import moment from "moment";
import Loader from './../UI/loader';
import TextInput from './../UI/forms/textinput';
import DatePickerField from './../UI/forms/datepicker';
import SelectOption from './../UI/forms/selectoption';
import CheckBox from './../UI/forms/checkbox';
import Textarea from './../UI/forms/textarea';
import countries from '../../data/countries';

require('style!css!sass!react-datepicker/dist/react-datepicker.css'); 

class CreateReservation extends Component {
	componentWillMount(){
		this.props.fetchReservationFormParams();
        
	}
	componentDidUpdate(){
        App.init();
        Layout.init();
    }
    handleFormSubmit(formProps) {
        this.props.createReservation(formProps);
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
    renderStatusTypes(){
        return this.props.reservation.status_types.map((data, index) => (
                <option key={data.id} value={data.id}>{data.type}</option>
            ));
    }

	render(){
		if(!this.props.reservation) {
			return <Loader />
		}
        const personsArr  = [ { id : "1", name : "1" }, { id : "2", name : "2" }, { id : "3", name : "3" }, { id : "4", name : "4" } ];
		const { handleSubmit, fields: { client_name, client_phone, client_email, country, check_in, check_out, deposit, deposit_amount, persons, price, breakfast, channel_id, room_type_id, status_id, notes, ref_id } } = this.props;
		return (
			<div className="page-content">
                <h3 className="page-title"> NEW RESERVATION
                </h3>
                
                <div className="row">
					<div className="col-md-12">
						<div className="portlet light bordered">
                            <div className="portlet-title">
                                <div className="caption font-green">
                                    <i className="icon-settings font-green"></i>
                                    <span className="caption-subject bold uppercase"> Create</span>
                                </div>
                            </div>
                            <div className="portlet-body form">
                                <form role="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                    <div className="form-body">
                                        <TextInput type="text" name="Name" data={client_name} />
                                        <TextInput type="email" name="Email" data={client_email} />
                                        <TextInput type="text" name="Phone" data={client_phone} />
                                        <SelectOption name="Country" data={country} options={countries} />
                                        <DatePickerField 
                                            name="Check In" 
                                            startDate={moment()} 
                                            endDate={moment()}  
                                            selected={moment(check_in.value)} 
                                            data={check_in}/>
                                        <DatePickerField 
                                            name="Check Out" 
                                            startDate={moment()} 
                                            endDate={moment()} 
                                            selected={moment(check_out.value)}
                                            data={check_out}/>
                                        <div className="clearfix"></div>
                                        <SelectOption name="Room Type" data={room_type_id} options={this.props.reservation.room_types} />
                                        <SelectOption name="Persons" data={persons} options={personsArr} />
                                        <TextInput type="number" name="Price" data={price} />
                                        <CheckBox name="Breakfast" data={breakfast} />
                                        <CheckBox name="Deposit" data={deposit} />
                                        {deposit.value &&
                                            <TextInput type="number" name="Deposit Amount" data={deposit_amount} />
                                        }
                                        <SelectOption name="Channel" data={channel_id} options={this.props.reservation.channels} />     
                                        {(channel_id.value!=4 && channel_id.value!=5) &&
                                            <TextInput type="text" name="Ref.id" data={ref_id} />                                     
                                        }                                   
                                        <div className="form-group form-md-line-input">
                                            <select className="form-control" {...status_id}>
                                                <option value="">Select</option>
                                                {this.renderStatusTypes()}
                                            </select>
                                            <label htmlFor="form_control_1">Status</label>
                                        </div>
                                        <Textarea name="Notes" data={notes}/>
                                    </div>
                                    {this.renderAlert()}
                                    <div className="form-actions noborder">
                                        <button type="submit" className="btn blue">Update</button>
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
		reservation: state.auth.reservationformparams,
		successMessage: state.auth.success,
        errorMessage: state.auth.error,
        initialValues: {
            check_in : moment().format('YYYY/MM/DD'),
            check_out : moment().format('YYYY/MM/DD')
        }
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
    


    return errors;
}

export default reduxForm({

    form: 'create_reservation',
    fields: ['client_name', 'client_email', 'client_phone', 'country', 'check_in', 'check_out', 'deposit', 'deposit_amount', 'persons', 'price', 'breakfast', 'channel_id', 'room_type_id', 'status_id', 'notes', 'ref_id'],
    validate

}, mapStateToProps, actions)(CreateReservation);

