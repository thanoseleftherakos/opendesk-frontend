import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import moment from "moment";
import locale_el from "moment/locale/el";
import Loader from './../UI/loader';

class SingleReservation extends Component {
	componentWillMount(){
		moment.defineLocale("el", locale_el);
		this.props.fetchReservation(this.props.params.id);
	}
	renderDate(date){
		var new_date = moment(date).format("LL");
		return new_date;
	}
    removeReservation(){
        this.props.removeReservation(this.props.params.id);
    }

	render() {
		if(!this.props.reservation) {
			return <Loader />
		}
		return (
			<div className="page-content">
                <h3 className="page-title">{this.props.reservation.client_name} 
                    <small> {this.props.reservation.room.name} | 
                    		{this.props.reservation.nights} nights | 
                    		{this.props.reservation.total_price} €
                    </small>
                    <span className={'label label-sm label-' + (this.props.reservation.status_type.type==1 ? 'success' : 'danger')}>
                 		{this.props.reservation.status_type.type}
                 	</span> 
                </h3>
                <div className="row">
					<div className="col-md-12">
                       
                        <div className="portlet light bordered">
                            <div className="portlet-title">
                                <div className="caption">
                                    <i className="icon-social-dribbble font-green"></i>
                                    <span className="caption-subject font-green bold uppercase">{this.props.reservation.room.name}</span>
                                </div>
                                <div className="actions">
                                    <Link to={`/reservations/edit/${this.props.reservation.id}`} className="btn btn-circle btn-icon-only btn-default">
                                        <i className="icon-pencil"></i>
                                    </Link>
                                    <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;" onClick={this.removeReservation.bind(this)}>
                                        <i className="icon-trash"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="portlet-body">
                                <div className="table-scrollable">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <td width='30%'> Client Name </td>
                                                <td> {this.props.reservation.client_name} </td>
                                            </tr>
                                            <tr>
                                                <td> Client Email </td>
                                                <td> {this.props.reservation.client_email} </td>
                                            </tr>
                                            <tr>
                                                <td> Client Phone </td>
                                                <td> {this.props.reservation.client_phone} </td>
                                            </tr>
                                            <tr>
                                                <td> Check-in </td>
                                                <td> {this.props.reservation.check_in} </td>
                                            </tr>
                                            <tr>
                                                <td> Check-out </td>
                                                <td> {this.props.reservation.check_out} </td>
                                            </tr>
                                            <tr>
                                                <td> Room type </td>
                                                <td> {this.props.reservation.room.name} </td>
                                            </tr>
                                            <tr>
                                                <td> Persons </td>
                                                <td> {this.props.reservation.persons} </td>
                                            </tr>
                                            <tr>
                                                <td> Arrival </td>

                                                <td> { this.renderDate(this.props.reservation.check_in) } </td>
                                            </tr>
                                            <tr>
                                                <td> Departure </td>
                                                <td> { this.renderDate(this.props.reservation.check_out) } </td>
                                            </tr>
                                            <tr>
                                                <td> Nights </td>
                                                <td> {this.props.reservation.nights} </td>
                                            </tr>
                                            <tr>
                                                <td> Breakfast </td>
                                                <td>
                                                	<span className={'label label-sm label-' + (this.props.reservation.breakfast ? 'success ' : 'danger')}>
                                                 		{(this.props.reservation.breakfast ? 'YES' : 'NO')}
                                                 	</span> 
                                                 </td> 
                                            </tr>
                                            <tr>
                                                <td> Deposit </td>
                                                <td>
                                                	<span className={'label label-sm label-' + (this.props.reservation.deposit ? 'success' : 'danger')}>
                                                 		{(this.props.reservation.deposit ? 'YES' : 'NO')}
                                                 	</span> 
                                                 </td> 
                                            </tr>
                                            <tr>
                                                <td> Deposit Amount </td>
                                                <td> {this.props.reservation.deposit_amount} € </td>
                                            </tr>
                                            <tr>
                                                <td> Price per night </td>
                                                <td> {this.props.reservation.price} €</td>
                                            </tr>
                                            <tr>
                                                <td> Total price </td>
                                                <td> {this.props.reservation.total_price} € </td>
                                            </tr>
                                            <tr>
                                                <td> Channel </td>
                                                <td> {this.props.reservation.channel.name} </td>
                                            </tr>
                                            {this.props.reservation.ref_id &&
                                                <tr>
                                                    <td> Ref.id </td>
                                                    <td> {this.props.reservation.ref_id} </td>
                                                </tr>
                                            }
                                            <tr>
                                                <td> Status </td>
                                                <td>
                                                	<span className={'label label-sm label-' + (this.props.reservation.status_type.type ? 'success' : 'danger')}>
                                                 		{this.props.reservation.status_type.type}  <i className={'icon-' + (this.props.reservation.status_type.type ? 'check' : 'close')} ></i>
                                                 	</span> 
                                                 </td> 
                                            </tr>
                                            <tr>
                                                <td> Notes </td>
                                                <td> {this.props.reservation.notes} </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
					</div>                

                </div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {reservation: state.auth.reservation};
}

export default connect(mapStateToProps, actions)(SingleReservation);
