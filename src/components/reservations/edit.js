import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class EditReservation extends Component {
	componentWillMount(){
		this.props.fetchReservation(this.props.params.id);
	}
	componentDidUpdate(){
        App.init();
        Layout.init();
    }
    handleFormSubmit(formProps) {
        this.props.editReservation(formProps);
    }

	render(){
		if(!this.props.reservation) {
			return <div>loading....</div>
		}
		const { handleSubmit, fields: { client_name, client_phone, client_email } } = this.props;

		return (
			<div className="page-content">
                <h3 className="page-title">EDIT: {this.props.reservation.client_name} 
                    <small> {this.props.reservation.room.name} | 
                    		{this.props.reservation.nights} nights | 
                    		{this.props.reservation.total_price} € 
                    </small>
                    <span className={'label label-sm label-' + (this.props.reservation.status_type.type ? 'success' : 'danger')}>
                 		{this.props.reservation.status_type.type}
                 	</span> 
                </h3>
                <div className="row">
					<div className="col-md-12 ">
						<div className="portlet light bordered">
                            <div className="portlet-title">
                                <div className="caption font-red-sunglo">
                                    <i className="icon-settings font-red-sunglo"></i>
                                    <span className="caption-subject bold uppercase"> Edit Reservation</span>
                                </div>
                            </div>
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
                                    </div>
                                    <div className="form-actions noborder">
                                        <button type="button" className="btn blue">Update</button>
                                        <button type="button" className="btn default">Cancel</button>
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
		errorMessage: state.auth.error
	};
}

function validate(formProps) {
    const errors = {};



    return errors;
}

export default reduxForm({

    form: 'edit_reservation',
    fields: ['client_name', 'client_email', 'client_phone'],
    validate

}, mapStateToProps, actions)(EditReservation);

