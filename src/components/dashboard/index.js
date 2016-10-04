import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDashboard } from '../../actions/dashboardActions';
import DashboardStat from './dashboard_stat';
import Portlet from './portlet/';
import Loader from './../UI/loader';
import ReservationsTable from './../UI/reservations_table';
import ReactHighcharts from 'react-highcharts';
import Chart from './../UI/chart';
import moment from "moment";

class Dashboard extends Component {
    componentWillMount() {
        this.props.fetchDashboard();    

    }
    componentDidMount(){
        document.title = "Dashboard";
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
                        <DashboardStat key="1" name="Free Rooms Today" value={this.props.dashboard.available_rooms_today} color="green" icon="fa-shopping-cart" />
                        <DashboardStat key="1" name="Arrivals Today" value={this.props.dashboard.arivals_today_count} color="green" icon="fa-shopping-cart" />
                        <DashboardStat key="2" name="Departures Today" value={this.props.dashboard.departures_today_count} color="purple" icon="fa-globe" />
                        <DashboardStat key="3" name="Total Reservations" value={this.props.dashboard.total_reservations} color="blue" icon="fa-comments" />
                        <DashboardStat key="4" name="Total Profit" value={this.props.dashboard.total_earnings} color="red" icon="fa-bar-chart-o" />
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <Portlet name="ARRIVALS" key="a" tab1={this.props.dashboard.arivals_today} tab2={this.props.dashboard.arivals_tomorrow} />
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <Portlet name="DEPARTURES" key="6" tab1={this.props.dashboard.departures_today} tab2={this.props.dashboard.departures_tomorrow} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ReservationsTable reservations={ this.props.dashboard.current_rooms } title="Current rooms"/>
                        </div>
                    </div>
                     <div className="row">
                        <div className="col-md-12">
                            <Chart config={this.props.dashboard.chart} chartTitle={moment().format('MMMM')} yaxis="Rooms" />
                        </div>
                    </div>
                    
                    <div className="clearfix"></div>
                </div>
		);
	}
}
function mapStateToProps(state) {
    return { dashboard: state.auth.dashboard,
             loading: state.auth.loading
             };
}

export default connect(mapStateToProps, { fetchDashboard })(Dashboard);

