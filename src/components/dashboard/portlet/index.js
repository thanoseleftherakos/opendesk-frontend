import React, { Component } from 'react';
import PortletItem from './item';
var _ = require('lodash');

class Portlet extends Component {

	renderItemsTab(props){
		if(!_.isEmpty(props)){
			return props.map((data, index) => (
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
	                <ul className="nav nav-tabs">
                        <li className="active">
                            <a href={"#tab_1_1_" + this.props.name} data-toggle="tab" aria-expanded="false"> TODAY </a>
                        </li>
                        <li className="">
                            <a href={"#tab_1_2_" + this.props.name } data-toggle="tab" aria-expanded="true"> TOMORROW </a>
                        </li>
                    </ul>
	            </div>
	            <div className="portlet-body">
	                <div className="tab-content">
	                    <div className="tab-pane active" id={"tab_1_1_" + this.props.name}>
	                        <div className="" data-always-visible="1" data-rail-visible="0">
	                            <ul className="feeds">
	                            	{this.renderItemsTab(this.props.tab1)}
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="tab-pane" id={"tab_1_2_" + this.props.name }>
	                        <div className="" data-always-visible="1" data-rail-visible="0">
	                            <ul className="feeds">
	                            	{this.renderItemsTab(this.props.tab2)}
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