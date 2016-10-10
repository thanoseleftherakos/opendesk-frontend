import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import TextInput from './../UI/forms/textinput';
import SelectOption from './../UI/forms/selectoption';
import DatePickerField from './../UI/forms/datepicker';
import * as actions from '../../actions/reservationsActions';
import moment from "moment";
import Loader from './../UI/loader';
import Alert from '../UI/alerts';
import ReservationsTable from './../UI/reservations_table';
import { I18n } from 'react-redux-i18n';

class Availability extends Component { 
    
    componentWillMount(){
        if(!this.props.reservations){
            this.fetchData();
        }
    }
    componentDidUpdate(){
        App.init();
        Layout.init();
    }
	handleFormSubmit(formProps) {
        this.props.fetchReservations(formProps);
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

    fetchData(formProps) {
    	this.props.fetchReservations(formProps);
    }

	render() {
		const { handleSubmit, fields: { query, stay_from, stay_to, type } } = this.props;
        const typesArr  = [ { id : "rs_date", name : I18n.t('general.rs_date') }, { id : "arr_date", name : I18n.t('general.arr_date') }, { id : "dp_date", name : I18n.t('general.dp_date') } ];
		if(!this.props.reservations) {
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
									<DatePickerField 
                                            name={I18n.t('general.from')} 
                                            startDate={moment(stay_from.value)} 
                                            endDate={moment(stay_to.value)} 
                                            selected={moment(stay_from.value)} 
                                            data={stay_from}/>
                                        <DatePickerField 
                                            name={I18n.t('general.to')}  
                                            startDate={moment(stay_from.value)} 
                                            endDate={moment(stay_to.value)} 
                                            selected={moment(stay_to.value)}
                                            data={stay_to}/>
									<div className="clearfix"></div>
									<button type="submit" className="btn btn-success">{I18n.t('general.search')} </button>
								</form>
                            </div>
                        </div>	
                        <ReservationsTable reservations={ this.props.reservations } title={I18n.t('general.search_results')} />
                        {this.renderAlert()}               
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
		reservations: state.reservations.reservations,
        successMessage: state.auth.success,
        errorMessage: state.auth.error,
        loading: state.auth.loading,
        lang: state.i18n
	};
}


export default reduxForm({

    form: 'edit_reservation',
    fields: ['query', 'stay_from', 'stay_to', 'type'],
    initialValues: {
        stay_from: moment().format('YYYY/MM/DD'),
        stay_to: moment().add(1, 'days').format('YYYY/MM/DD'),
        query: '',
        type: 'arr_date'
    }

}, mapStateToProps, actions)(Availability);