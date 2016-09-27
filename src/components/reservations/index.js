import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { fetchReservations } from '../../actions';
import { Link } from 'react-router'
import TextInput from './../UI/forms/textinput';
import DatePickerField from './../UI/forms/datepicker';
import * as actions from '../../actions';
import moment from "moment";
import Loader from './../UI/loader';
import Alert from '../UI/alerts';

class Reservations extends Component { 
    
    componentDidMount(){
        if(!this.props.reservations){
            this.fetchData();
        }
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
    removeReservation(id){
        this.props.removeReservation(id);
    }

    renderResults(){
    	return this.props.reservations.map((data, index) => (
            <tr key={index}>
                <td> { index+1 } </td>
                <td> { data.created_at } </td>
                <td> 
                	<Link to={`/reservations/${data.id}`} >
                		{ data.client_name } 
                	</Link>
                </td>
                <td> { moment(data.check_in).format('dddd DD MMMM YY') } </td>
                <td> { moment(data.check_out).format('dddd DD MMMM YY') } </td>
                <td> { data.status_type.type } </td>
                <td className="numeric"> { data.price } </td>
                <td> { data.room.name } </td>
                <td> { data.channel.name } </td>
                <td> 
                	<Link to={`/reservations/${data.id}`} className="btn btn-xs blue">
                		<i className="icon-eye"></i> 
                	</Link>
                  
                	<Link to={`/reservations/edit/${data.id}`} className="btn btn-xs yellow-crusta">
                		<i className="icon-pencil"></i> 
                	</Link>
                	<a href="javascript:;" className="btn btn-xs red" onClick={this.removeReservation.bind(this,data.id)}>
                		<i className="icon-trash"></i> 
                	</a>
                </td>
            </tr>
         ));
    }

    fetchData(formProps) {
    	this.props.fetchReservations(formProps);
    }

	render() {
		const { handleSubmit, fields: { query, check_in, check_out } } = this.props;
		if(!this.props.reservations) {
			return <Loader />
		}
		return(
			<div className="page-content">
                <h1 className="page-title">Your reservations</h1>
                <div className="row">
	                <div className="col-md-12">
						<div className="note note-info">
                            <div className="filters-container">
								<form role="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
									<TextInput name="Search" placeholder="Enter your search criteria" data={query} />
									<DatePickerField 
                                            name="From" 
                                            startDate={moment(check_in.value)} 
                                            endDate={moment(check_out.value)} 
                                            selected={moment(check_in.value)} 
                                            data={check_in}/>
                                        <DatePickerField 
                                            name="To" 
                                            startDate={moment(check_in.value)} 
                                            endDate={moment(check_out.value)} 
                                            selected={moment(check_out.value)}
                                            data={check_out}/>
									<div className="clearfix"></div>
									<button type="submit" className="btn btn-success">Search</button>
								</form>
                            </div>
                        </div>	
                        {this.renderAlert()}
						<div className="portlet box green">
                                <div className="portlet-title">
                                    <div className="caption">
                                        <i className="fa fa-calendar"></i>Results</div>
                                    <div className="tools">
                                        <a href="javascript:;" className="collapse" data-original-title="" title=""> </a>
                                        <a href="javascript:;" className="reload" data-original-title="" title="" onClick={this.fetchData.bind(this)}> </a>
                                    </div>
                                </div>
                                <div className="portlet-body flip-scroll">
                                    <table className="table table-bordered table-striped table-condensed flip-content">
                                        <thead className="flip-content">
                                            <tr>
                                                <th width="2%"> # </th>
                                                <th width="13%"> Reservation Date </th>
                                                <th> Client Name </th>
                                                <th> Check In </th>
                                                <th> Check Out </th>
                                                <th> Status </th>
                                                <th className="numeric"> Price </th>
                                                <th> Room Type </th>
                                                <th> Channel </th>
                                                <th> Actions </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        	{this.renderResults()}
                                        </tbody>
                                    </table>
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
		reservations: state.auth.reservations,
        successMessage: state.auth.success,
        errorMessage: state.auth.error
	};
}


export default reduxForm({

    form: 'edit_reservation',
    fields: ['query', 'check_in', 'check_out'],
    initialValues: {
        check_in: moment(),
        check_out: moment().add(1, 'days'),
        query: ''
    }

}, mapStateToProps, actions)(Reservations);