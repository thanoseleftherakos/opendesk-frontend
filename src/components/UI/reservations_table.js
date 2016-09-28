import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReservationsTableRow from './reservations_table_row';
import * as actions from '../../actions';

class ReservationsTable extends Component {

	renderResults(){
    	return this.props.reservations.map((data, index) => (
			<ReservationsTableRow data={data} key={index} index={index} removeReservation={this.removeReservation.bind(this,data.id)} />
    	));
	}
	removeReservation(id){
        this.props.removeReservation(id);
    }

	render() {

		return (
			<div className="portlet box green">
			    <div className="portlet-title">
			        <div className="caption">
			            <i className="fa fa-calendar"></i>{this.props.title}</div>
			        <div className="tools">
			            <a href="javascript:;" className="collapse" data-original-title="" title=""> </a>
			        </div>
			    </div>
			    <div className="portlet-body flip-scroll">
			        <table className="table table-bordered table-striped table-condensed flip-content">
			            <thead className="flip-content">
			                <tr>
			                    <th width="2%"> # </th>
			                    <th width="9%"> Reserv. Date </th>
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
		);
	}
}


export default connect(null, actions)(ReservationsTable);