import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import * as actions from '../../actions/reservationsActions';
import moment from "moment";
import locale_el from "moment/locale/en-gb";
import Loader from './../UI/loader';
import { I18n } from 'react-redux-i18n';

class SingleReservation extends Component {
	componentWillMount(){
		moment.updateLocale("en", locale_el);
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
			<div>
                <h3 className="page-title">{this.props.reservation.client_name} 
                    <small> {this.props.reservation.room.name} | 
                    		{this.props.reservation.nights} {I18n.t('general.nights', {count: this.props.reservation.nights})} | 
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
                                <div className="caption">
                                    <i className="icon-social-dribbble font-green"></i>
                                    <span className="caption-subject font-green bold uppercase">{this.props.reservation.room.name}</span>
                                </div>
                                <div className="actions">
                                    <Link to={`/hotel/reservations/edit/${this.props.reservation.id}`} className="btn btn-circle btn-icon-only btn-default">
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
                                                <td width='30%'> {I18n.t('forms.name')} </td>
                                                <td> {this.props.reservation.client_name} </td>
                                            </tr>
                                            <tr>
                                                <td> {I18n.t('forms.email')} </td>
                                                <td> {this.props.reservation.client_email} </td>
                                            </tr>
                                            <tr>
                                                <td> {I18n.t('forms.phone')} </td>
                                                <td> {this.props.reservation.client_phone} </td>
                                            </tr>
                                            <tr>
                                                <td> {I18n.t('forms.country')} </td>
                                                <td> {this.props.reservation.country} </td>
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
                                                <td> {I18n.t('forms.room_type')} </td>
                                                <td> {this.props.reservation.room.name} </td>
                                            </tr>
                                            <tr>
                                                <td> {I18n.t('forms.persons')} </td>
                                                <td> {this.props.reservation.persons} </td>
                                            </tr>
                                            <tr>
                                                <td> {I18n.t('general.arrivals', {count:1})} </td>

                                                <td> { this.renderDate(this.props.reservation.check_in) } </td>
                                            </tr>
                                            <tr>
                                                <td> {I18n.t('general.departures', {count:1})} </td>
                                                <td> { this.renderDate(this.props.reservation.check_out) } </td>
                                            </tr>
                                            <tr>
                                                <td> {I18n.t('general.nights')} </td>
                                                <td> {this.props.reservation.nights} </td>
                                            </tr>
                                            <tr>
                                                <td> {I18n.t('forms.breakfast')} </td>
                                                <td>
                                                	<span className={'label label-sm label-' + (this.props.reservation.breakfast ? 'success ' : 'danger')}>
                                                 		{(this.props.reservation.breakfast ? I18n.t('general.yes') : I18n.t('general.no'))}
                                                 	</span> 
                                                 </td> 
                                            </tr>
                                            <tr>
                                                <td> {I18n.t('forms.deposit')} </td>
                                                <td>
                                                	<span className={'label label-sm label-' + (this.props.reservation.deposit ? 'success' : 'danger')}>
                                                 		{(this.props.reservation.deposit ? I18n.t('general.yes') : I18n.t('general.no'))}
                                                 	</span> 
                                                 </td> 
                                            </tr>
                                            {this.props.reservation.deposit != 0 &&
                                            <tr>
                                                <td> {I18n.t('forms.deposit_amount')} </td>
                                                <td> {this.props.reservation.deposit_amount} € </td>
                                            </tr>
                                            }
                                            <tr>
                                                <td> {I18n.t('forms.price')} </td>
                                                <td> {this.props.reservation.price} €</td>
                                            </tr>
                                            <tr>
                                                <td> {I18n.t('forms.total_price')} </td>
                                                <td> {this.props.reservation.total_price} € </td>
                                            </tr>
                                            <tr>
                                                <td> Channel </td>
                                                <td> {this.props.reservation.channel.name} </td>
                                            </tr>
                                            {this.props.reservation.ref_id != 0 &&
                                                <tr>
                                                    <td> Ref.id </td>
                                                    <td> {this.props.reservation.ref_id} </td>
                                                </tr>
                                            }
                                            <tr>
                                                <td> {I18n.t('forms.status')} </td>
                                                <td>
                                                	<span className={'label label-sm label-' + (this.props.reservation.status_type.type ? 'success' : 'danger')}>
                                                 		{this.props.reservation.status_type.type}  <i className={'icon-' + (this.props.reservation.status_type.type ? 'check' : 'close')} ></i>
                                                 	</span> 
                                                 </td> 
                                            </tr>
                                            <tr>
                                                <td> {I18n.t('forms.notes')} </td>
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
	return {reservation: state.reservations.reservation,lang: state.i18n};
}

export default connect(mapStateToProps, actions)(SingleReservation);
