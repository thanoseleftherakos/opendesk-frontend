import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import DashboardStat from './dashboard_stat';
import Portlet from './portlet/';
import Loader from './../UI/loader';

class Dashboard extends Component {
    componentWillMount() {
        this.props.fetchDashboard();      
    }
    componentDidUpdate(){
        App.init();
        Layout.init();
    }

	render() {
        if(!this.props.dashboard) {
            return <Loader />
        }
        
		return (
                <div className="page-content">
                    <h3 className="page-title">{this.props.dashboard.hotel.name} 
                        <small> dashboard & statistics</small>
                    </h3>
                    <div className="row">
                        <DashboardStat key="1" name="Arrivals Today" value={this.props.dashboard.arivals_today_count} color="green" icon="fa-shopping-cart" />
                        <DashboardStat key="2" name="Departures Today" value={this.props.dashboard.departures_today_count} color="purple" icon="fa-globe" />
                        <DashboardStat key="3" name="Total Reservations" value={this.props.dashboard.total_reservations} color="blue" icon="fa-comments" />
                        <DashboardStat key="4" name="Total Profit" value={this.props.dashboard.total_earnings} color="red" icon="fa-bar-chart-o" />
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <Portlet name="ARRIVALS TODAY" key="5" data={this.props.dashboard.arivals_today}/>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <Portlet name="DEPARTURES TODAY" key="6" data={this.props.dashboard.departures_today}/>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
		);
	}
}
function mapStateToProps(state) {
    return { dashboard: state.auth.dashboard };
}

export default connect(mapStateToProps, actions)(Dashboard);

