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

import { I18n } from 'react-redux-i18n';

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
                        <DashboardStat key="dash1" name={I18n.t('dashboard.stats.freerooms')} value={this.props.dashboard.available_rooms_today} color="green" icon="fa-shopping-cart" />
                        <DashboardStat key="dash2" name={I18n.t('dashboard.stats.departures')} value={this.props.dashboard.departures_today_count} color="purple" icon="fa-globe" />
                        <DashboardStat key="dash3" name={I18n.t('dashboard.stats.totalR')} value={this.props.dashboard.total_reservations} color="blue" icon="fa-comments" />
                        <DashboardStat key="dash4" name={I18n.t('dashboard.stats.totalP')} value={this.props.dashboard.total_earnings} color="red" icon="fa-bar-chart-o" />
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <Portlet name={I18n.t('general.arrivals')} key="adfasdf" tab1={this.props.dashboard.arivals_today} tab2={this.props.dashboard.arivals_tomorrow} />
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <Portlet name={I18n.t('general.departures')} key="6asdfsadf" tab1={this.props.dashboard.departures_today} tab2={this.props.dashboard.departures_tomorrow} />
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
    return { dashboard: state.dashboard.dashboard,
             loading: state.auth.loading
             };
}

export default connect(mapStateToProps, { fetchDashboard })(Dashboard);

