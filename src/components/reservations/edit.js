import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import Alert from '../UI/alerts';
import DatePicker from 'react-datepicker';
import moment from "moment";
import Loader from './../UI/loader';

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
    renderChannels(){
        return this.props.reservation.channels.map((data, index) => (
                <option key={data.id} value={data.id}>{data.name}</option>
            ));
    }
    renderRoomTypes(){
        return this.props.reservation.room_types.map((data, index) => (
                <option key={data.id} value={data.id}>{data.name}</option>
            ));
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
		const { handleSubmit, fields: { client_name, client_phone, client_email, check_in, check_out, deposit, deposit_amount, nights, persons, price, breakfast, channel_id, room_type_id, status_id } } = this.props;

		return (
			<div className="page-content">
                <h3 className="page-title">EDIT: {this.props.reservation.client_name}
                    <small> {this.props.reservation.room.name} | 
                    		{this.props.reservation.nights} nights | 
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
                                    <span className="caption-subject bold uppercase"> Edit Reservation</span>
                                </div>
                            </div>
                            {this.renderAlert()}
                            <div className="portlet-body form">
                                <form role="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                    <div className="form-body">
                                        <div className="form-group form-md-line-input">
                                            <input type="text" className="form-control" id="form_control_1" {...client_name} placeholder="Name" />
                                            <label htmlFor="form_control_1">Name</label>
                                        </div>
                                        <div className="form-group form-md-line-input">
                                            <input type="text" className="form-control" id="form_control_1" {...client_email} placeholder="Email" />
                                            <label htmlFor="form_control_1">Email</label>
                                        </div>
                                        <div className="form-group form-md-line-input">
                                            <input type="text" className="form-control" id="form_control_1" {...client_phone} placeholder="Phone" />
                                            <label htmlFor="form_control_1">Phone</label>
                                        </div>
                                        <div className="form-group form-md-line-input left">
                                            <label htmlFor="form_control_1">Check In</label>
                                            <DatePicker 
                                                {...check_in}
                                                className="form-control"
                                                dateFormat="YYYY/MM/DD" 
                                                startDate={moment(check_in.value)}
                                                endDate={moment(check_out.value)}
                                                selected={ check_in.value ? moment(check_in.value) : null } 
                                                onChange={value => check_in.onChange(value) }
                                            />
                                        </div>
                                        <div className="form-group form-md-line-input">
                                            <label htmlFor="form_control_1">Check Out</label>
                                            <DatePicker 
                                                {...check_out}
                                                className="form-control"
                                                dateFormat="YYYY/MM/DD" 
                                                startDate={moment(check_in.value)}
                                                endDate={moment(check_out.value)}
                                                selected={ check_out.value ? moment(check_out.value) : null } 
                                                onChange={value => check_out.onChange(value) }
                                            />
                                        </div>
                                        <div className="form-group form-md-line-input">
                                            <select className="form-control" {...room_type_id}>
                                                <option value="">Select</option>
                                                {this.renderRoomTypes()}
                                            </select>
                                            <label htmlFor="form_control_1">Room Type</label>
                                        </div>
                                        <div className="form-group form-md-line-input">
                                            <select className="form-control" {...persons}>
                                                <option value="">Select</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                            <label htmlFor="form_control_1">Persons</label>
                                        </div>
                                        <div className="form-group form-md-line-input">
                                            <input type="number" className="form-control" id="form_control_1" {...price} placeholder="Price" />
                                            <label htmlFor="form_control_1">Price</label>
                                        </div>
                                        <div className="form-group form-md-line-input">
                                            <input type="number" className="form-control" id="form_control_1" {...nights} placeholder="Nights" />
                                            <label htmlFor="form_control_1">Nights</label>
                                        </div>
                                        <div className="form-group form-md-checkboxes">
                                            <div className="md-checkbox-list">
                                                <div className="md-checkbox">
                                                    <input type="checkbox" id="checkbox1" {...breakfast} checked={breakfast.value ? 'checked' : ''} className="md-check" />
                                                    <label htmlFor="checkbox1">
                                                        <span className="inc"></span>
                                                        <span className="check"></span>
                                                        <span className="box"></span> 
                                                        <p>Breakfast </p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group form-md-checkboxes">
                                            <div className="md-checkbox-list">
                                                <div className="md-checkbox">
                                                    <input type="checkbox" id="checkbox1" {...deposit} checked={deposit.value ? 'checked' : ''} className="md-check" />
                                                    <label htmlFor="checkbox1">
                                                        <span className="inc"></span>
                                                        <span className="check"></span>
                                                        <span className="box"></span> 
                                                        <p>Deposit </p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {deposit.value &&
                                            <div className={"form-group form-md-line-input " + (deposit_amount.error ? 'has-error' : '')}>
                                                <input type="number" className="form-control" id="form_control_1" {...deposit_amount} placeholder="Deposit Amount" />
                                                <label htmlFor="form_control_1">Deposit Amount</label>
                                                {deposit_amount.touched && deposit_amount.error && <span className="help-block help-block-error">{deposit_amount.error}</span>}
                                            </div>
                                        }
                                        <div className="form-group form-md-line-input">
                                            <select className="form-control" {...channel_id}>
                                                <option value="">Select</option>
                                                {this.renderChannels()}
                                            </select>
                                            <label htmlFor="form_control_1">Channel</label>
                                        </div>
                                        <div className="form-group form-md-line-input">
                                            <select className="form-control" {...status_id}>
                                                <option value="">Select</option>
                                                {this.renderStatusTypes()}
                                            </select>
                                            <label htmlFor="form_control_1">Status</label>
                                        </div>
                                        

                                    </div>
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
		reservation: state.auth.reservation,
		initialValues: state.auth.reservation,
		successMessage: state.auth.success,
        errorMessage: state.auth.error
	};
}

function validate(formProps) {
    const errors = {};

    if (formProps.deposit && !formProps.deposit_amount) {
        errors.deposit_amount = 'Please enter a deposit amount';
    }

    return errors;
}

export default reduxForm({

    form: 'edit_reservation',
    fields: ['client_name', 'client_email', 'client_phone', 'check_in', 'check_out', 'deposit', 'deposit_amount', 'nights', 'persons', 'price', 'breakfast', 'channel_id', 'room_type_id', 'status_id'],
    validate

}, mapStateToProps, actions)(EditReservation);

