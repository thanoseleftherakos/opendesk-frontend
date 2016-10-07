import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from "moment";

class ReservationsTableRow extends Component {
  render() {

    return (
        <tr>
            <td> { this.props.data.room_number } </td>
            <td> { moment(this.props.data.created_at).format('DD/MM/YYYY') } </td>
            <td> 
            	<Link to={`/hotel/reservations/${this.props.data.id}`} >
            		{ this.props.data.client_name } 
            	</Link>
            </td>
            <td> {this.props.data.country} </td>
            <td> { moment(this.props.data.check_in).format('dddd DD MMMM YY') } </td>
            <td> { moment(this.props.data.check_out).format('dddd DD MMMM YY') } </td>
            <td> { this.props.data.status_type.type } </td>
            <td className="numeric"> { this.props.data.price } </td>
            <td> { this.props.data.room.name } </td>
            <td> { this.props.data.channel.name } </td>
            <td> 
            	<Link to={`/hotel/reservations/${this.props.data.id}`} className="btn btn-xs blue">
            		<i className="icon-eye"></i> 
            	</Link>
              
            	<Link to={`/hotel/reservations/edit/${this.props.data.id}`} className="btn btn-xs yellow-crusta">
            		<i className="icon-pencil"></i> 
            	</Link>
            	<a href="javascript:;" className="btn btn-xs red" onClick={this.props.removeReservation}>
                	<i className="icon-trash"></i> 
                </a>
            </td>
        </tr>
    );
  }
}

export default ReservationsTableRow;