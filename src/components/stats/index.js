import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import DatePickerField from './../UI/forms/datepicker';
import { fetchStats } from '../../actions/statsActions';
import moment from "moment";
import Loader from './../UI/loader';
import PieChart from './../UI/piechart';

import { I18n } from 'react-redux-i18n';

class Stats extends Component { 
    
    componentWillMount(){
    }
    componentDidUpdate(){
        App.init();
        Layout.init();
    }
	handleFormSubmit(formProps) {
        this.props.fetchStats(formProps);
    }

    renderStats() {
        if(this.props.statistics){
            return (
                <PieChart chartTitle={I18n.t('general.countries')} config={this.props.statistics.countries}/>
            );
        }
    }


	render() {
		const { handleSubmit, fields: { from_date, to_date } } = this.props;

		return(
			<div>
                <h1 className="page-title">{I18n.t('general.statistics')}</h1>
                <div className="row">
	                <div className="col-md-12">
						<div className="note note-info">
                            <div className="filters-container">
								<form role="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
									<DatePickerField 
                                            name={I18n.t('general.from')} 
                                            startDate={moment(from_date.value)} 
                                            endDate={moment(to_date.value)} 
                                            selected={moment(from_date.value)} 
                                            data={from_date}/>
                                        <DatePickerField 
                                            name={I18n.t('general.to')}  
                                            startDate={moment(from_date.value)} 
                                            endDate={moment(to_date.value)} 
                                            selected={moment(to_date.value)}
                                            data={to_date}/>
									<div className="clearfix"></div>
									<button type="submit" className="btn btn-success">{I18n.t('general.view')} </button>
								</form>
                            </div>
                        </div>	
                        {this.renderStats()}
	               	</div>
                </div>
            </div>
		);
	}

}

function mapStateToProps(state) {
	return {
        lang: state.i18n,
        statistics: state.statistics.statistics
	};
}

function validate(formProps) {
    const errors = {};

    let to_date = moment(formProps.to_date);
    let from_date = moment(formProps.from_date);
    if(to_date <= from_date) {
        errors.to_date = I18n.t('general.must_be_after_from');
    }


    return errors;
}

export default reduxForm({
    
    form: 'stats_form',
    fields: ['from_date', 'to_date'],
    enableReinitialize: true,
    initialValues: {
        from_date: moment().format('YYYY/01/01'),
        to_date: moment().format('YYYY/01/01')

    },
    validate

}, mapStateToProps, { fetchStats })(Stats);