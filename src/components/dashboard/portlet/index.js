import React, { Component } from 'react';
import PortletItem from './item';
var _ = require('lodash');

class Portlet extends Component {

	renderItems(){
		// this.props.data
		if(!_.isEmpty(this.props.data)){
			return this.props.data.map((data, index) => (
            	<PortletItem key={index} id={data.id} title={data.client_name} details={data.room.name + ' | ' + data.nights + ' nights'} />
        	));
		}  else {
			return [<small>YOU DON'T HAVE ANY {this.props.name}</small>];
		}
		

		
	}

	render(){
		return (
			<div className="portlet light bordered">
	            <div className="portlet-title tabbable-line">
	                <div className="caption">
	                    <i className="icon-globe font-green-sharp"></i>
	                    <span className="caption-subject font-green-sharp bold uppercase">{this.props.name}</span>
	                </div>
	            </div>
	            <div className="portlet-body">
	                <div className="tab-content">
	                    <div className="tab-pane active" id="tab_1_1">
	                        <div className="scroller" data-always-visible="1" data-rail-visible="0">
	                            <ul className="feeds">
	                            	{this.renderItems()}
	                            </ul>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>			
		);
	}

}

export default Portlet;