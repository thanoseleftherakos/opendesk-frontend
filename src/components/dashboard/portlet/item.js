import React, { Component } from 'react';
import { Link } from 'react-router';

class PortletItem extends Component {

	render(){
		return (
			<li>
			    <Link to={'reservations/' + this.props.id}>
				    <div className="col1">
				        <div className="cont">
				            <div className="cont-col1">
				                <div className="label label-sm label-success">
				                    <i className="fa fa-bullhorn"></i>
				                </div>
				            </div>
				            <div className="cont-col2">
				                <div className="desc">{this.props.title}</div>
				            </div>
				        </div>
				    </div>
				    <div className="col2">
				        <div className="date"> {this.props.details} </div>
				    </div>
			    </Link>
			</li>
		);
	}

}

export default PortletItem;