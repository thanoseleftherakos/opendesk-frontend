import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReservationsTableRow from './reservations_table_row';
import * as actions from '../../actions/reservationsActions';
import { I18n } from 'react-redux-i18n';

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
			                    <th width="2%"> {I18n.t('forms.room_num')} </th>
			                    <th width="9%"> {I18n.t('general.resvdate')} </th>
			                    <th> {I18n.t('general.client_name')} </th>
			                    <th> {I18n.t('forms.country')} </th>
			                    <th> {I18n.t('general.check_in')} </th>
			                    <th> {I18n.t('general.check_out')} </th>
			                    <th> {I18n.t('general.status')} </th>
			                    <th className="numeric"> {I18n.t('general.price')} </th>
			                    <th> {I18n.t('general.room_type')} </th>
			                    <th> {I18n.t('general.channel')} </th>
			                    <th> {I18n.t('general.actions')} </th>
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