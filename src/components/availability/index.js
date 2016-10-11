import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import TextInput from './../UI/forms/textinput';
import SelectOption from './../UI/forms/selectoption';
import DatePickerField from './../UI/forms/datepicker';
import {checkAvailability} from '../../actions/availabilityActions';
import {roomTypes} from '../../actions/index';
import moment from "moment";
import Loader from './../UI/loader';
import Alert from '../UI/alerts';
import ReservationsTable from './../UI/reservations_table';
import { I18n } from 'react-redux-i18n';

class Availability extends Component { 
    
    componentWillMount(){
        if(!this.props.room_types){
            this.props.roomTypes();
        }
    }
    componentDidUpdate(){
        App.init();
        Layout.init();
    }
	handleFormSubmit(formProps) {
        this.props.checkAvailability(formProps);
    }
    renderDate(availability, status){
        if(this.props.availability_status == "error") {
            return availability.map((data) => (
                <p key={data.date}>{data.date} - {I18n.t('general.booked_rooms', { count:data.sum })}</p>
            ));
        }
        return availability.map((data) => (
            <p key={data.date}>{data.date} - {I18n.t('general.free_rooms', { count:data.sum })}</p>
        ));
    }

	render() {
		const { handleSubmit, fields: { check_in, check_out, room_type_id } } = this.props;
        if(!this.props.room_types) {
            return <Loader /> 
        }
		return(
			<div>
                <h1 className="page-title">{I18n.t('general.check_availability')}</h1>
                <div className="row">
	                <div className="col-md-12">
						<div className="note note-info">
                            <div className="filters-container">
								<form role="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                    <SelectOption name={I18n.t('general.type')} data={room_type_id} options={this.props.room_types} />
									<DatePickerField 
                                            name={I18n.t('general.from')} 
                                            startDate={moment(check_in.value)} 
                                            endDate={moment(check_out.value)} 
                                            selected={moment(check_in.value)} 
                                            data={check_in}/>
                                        <DatePickerField 
                                            name={I18n.t('general.to')}  
                                            startDate={moment(check_in.value)} 
                                            endDate={moment(check_out.value)} 
                                            selected={moment(check_out.value)}
                                            data={check_out}/>
									<div className="clearfix"></div>
									<button type="submit" className="btn btn-success">{I18n.t('general.search')} </button>
								</form>
                            </div>
                        </div>	
                        {this.props.availability_status &&
                            <div className={"note note-" + this.props.availability_status}>
                                <h4 className="block">{this.props.availability_status== "success" ? I18n.t('general.you_have_available_rooms') : I18n.t('general.no_available_rooms') }</h4>
                                {this.renderDate(this.props.availability, this.props.availability_status)}
                            </div>
                        }         
	               	</div>
                </div>
                {this.props.loading &&
                    <Loader />
                }
            </div>
		);
	}

}

function mapStateToProps(state) {
	return {
        room_types: state.general.room_types,
        availability: state.general.availability,
        availability_status: state.general.availability_status,
        successMessage: state.auth.success,
        errorMessage: state.auth.error,
        loading: state.auth.loading,
        lang: state.i18n
	};
}


export default reduxForm({
    
    form: 'edit_reservation',
    fields: ['check_in', 'check_out', 'room_type_id'],
    enableReinitialize: true,
    initialValues: {
        check_in: moment().format('YYYY/MM/DD'),
        check_out: moment().add(1, 'days').format('YYYY/MM/DD')

    }

}, mapStateToProps, { checkAvailability, roomTypes })(Availability);