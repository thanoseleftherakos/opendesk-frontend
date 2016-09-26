import React, { Component } from 'react';

class DashboardStat extends Component {

	render(){
		return (
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className={ 'dashboard-stat ' + this.props.color }>
                    <div className="visual">
                        <i className={ 'fa ' + this.props.icon }></i>
                    </div>
                    <div className="details">
                        <div className="number">
                            <span data-counter="counterup" data-value={this.props.value}>0</span>
                        </div>
                        <div className="desc"> {this.props.name} </div>
                    </div>
                </div>
            </div>
		);
	}

}

export default DashboardStat;