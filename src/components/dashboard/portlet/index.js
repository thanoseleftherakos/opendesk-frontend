import React, { Component } from 'react';
import PortletItem from './item';
import { I18n } from 'react-redux-i18n';
var _ = require('lodash');

class Portlet extends Component {

	renderItemsTab(props){
		if(!_.isEmpty(props)){
			return props.map((data, index) => (
            	<PortletItem key={index} id={data.id} title={data.client_name} details={data.room.name + ' | ' + data.nights + ' ' + I18n.t('general.nights', {count: data.nights})} />
        	));
		}  else {
			return [<small>{I18n.t('general.noarrivals', {name: this.props.name })}</small>]; 
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
	                {this.props.tab2 &&
	                <ul className="nav nav-tabs">
                        <li className="active">
                            <a href={"#tab_1_1_" + this.props.name} data-toggle="tab" aria-expanded="false"> {I18n.t('general.today')} </a>
                        </li>
                        <li className="">
                            <a href={"#tab_1_2_" + this.props.name } data-toggle="tab" aria-expanded="true"> {I18n.t('general.tomorrow')} </a>
                        </li>
                    </ul>
                	}
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