import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
var _ = require('lodash');

class Dashboard extends Component {
    componentWillMount() {
        this.props.fetchDashboard();      
    }
    componentDidUpdate(){
        console.log(this.props.dashboard);
        App.init();
    }

	render() {
        if(!this.props.dashboard) {
            return <div>loading.....</div>
        }
        
		return (
			<div className="page-content-wrapper">
                <div className="page-content">
                    <h3 className="page-title">{this.props.dashboard.hotel.name}
                        <small> dashboard & statistics</small>
                    </h3>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="dashboard-stat green">
                                <div className="visual">
                                    <i className="fa fa-shopping-cart"></i>
                                </div>
                                <div className="details">
                                    <div className="number">
                                        <span data-counter="counterup" data-value={this.props.dashboard.arivals_today_count}>0</span>
                                    </div>
                                    <div className="desc"> Arrivals Today </div>
                                </div>
                                <a className="more" href="javascript:;"> View more
                                    <i className="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="dashboard-stat purple">
                                <div className="visual">
                                    <i className="fa fa-globe"></i>
                                </div>
                                <div className="details">
                                    <div className="number">
                                        <span data-counter="counterup" data-value={this.props.dashboard.departures_today_count}>0</span>
                                    </div>
                                    <div className="desc"> Departures Today </div>
                                </div>
                                <a className="more" href="javascript:;"> View more
                                    <i className="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>                    
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="dashboard-stat blue">
                                <div className="visual">
                                    <i className="fa fa-comments"></i>
                                </div>
                                <div className="details">
                                    <div className="number">
                                        <span data-counter="counterup" data-value={this.props.dashboard.total_reservations}>0</span>
                                    </div>
                                    <div className="desc"> Total Reservations </div>
                                </div>
                                <a className="more" href="javascript:;"> View more
                                    <i className="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="dashboard-stat red">
                                <div className="visual">
                                    <i className="fa fa-bar-chart-o"></i>
                                </div>
                                <div className="details">
                                    <div className="number">
                                        <span data-counter="counterup" data-value={this.props.dashboard.total_earnings}>0</span> €</div>
                                    <div className="desc"> Total Profit </div>
                                </div>
                                <a className="more" href="javascript:;"> View more
                                    <i className="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="portlet light bordered">
                                <div className="portlet-title tabbable-line">
                                    <div className="caption">
                                        <i className="icon-globe font-green-sharp"></i>
                                        <span className="caption-subject font-green-sharp bold uppercase">ARRIVALS</span>
                                    </div>
                                </div>
                                <div className="portlet-body">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tab_1_1">
                                            <div className="scroller" data-always-visible="1" data-rail-visible="0">
                                                <ul className="feeds">
                                                    <li>
                                                        <div className="col1">
                                                            <div className="cont">
                                                                <div className="cont-col1">
                                                                    <div className="label label-sm label-success">
                                                                        <i className="fa fa-bell-o"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="cont-col2">
                                                                    <div className="desc"> You have 4 pending tasks.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col2">
                                                            <div className="date"> Just now </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-success">
                                                                            <i className="fa fa-bell-o"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc"> New version v1.4 just lunched! </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date"> 20 mins </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="portlet light bordered">
                                <div className="portlet-title tabbable-line">
                                    <div className="caption">
                                        <i className="icon-globe font-purple-sharp"></i>
                                        <span className="caption-subject font-purple-sharp bold uppercase">DEPARTURES</span>
                                    </div>
                                </div>
                                <div className="portlet-body">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tab_1_1">
                                            <div className="scroller" data-always-visible="1" data-rail-visible="0">
                                                <ul className="feeds">
                                                    <li>
                                                        <div className="col1">
                                                            <div className="cont">
                                                                <div className="cont-col1">
                                                                    <div className="label label-sm label-success">
                                                                        <i className="fa fa-bell-o"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="cont-col2">
                                                                    <div className="desc"> You have 4 pending tasks.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col2">
                                                            <div className="date"> Just now </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-success">
                                                                            <i className="fa fa-bell-o"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc"> New version v1.4 just lunched! </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date"> 20 mins </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
		);
	}
}
function mapStateToProps(state) {
    return { dashboard: state.auth.dashboard };
}

export default connect(mapStateToProps, actions)(Dashboard);

