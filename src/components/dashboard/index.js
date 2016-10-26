import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDashboard } from '../../actions/dashboardActions';
import DashboardStat from './dashboard_stat';
import Portlet from './portlet/';
import Loader from './../UI/loader';
import ReservationsTable from './../UI/reservations_table';
import ReactHighcharts from 'react-highcharts';
import LineChart from './../UI/linechart';
import moment from "moment";
import DatePicker from 'react-datepicker';
import { I18n } from 'react-redux-i18n';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: moment()
        };
    }
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
    dateChange(date){
        this.setState({
          startDate: date
        });
        this.props.fetchDashboard(date.format('Y/M/D'));  
    }

	render() {
        if(!this.props.dashboard) {
            return <Loader />
        }
		return (
                <div>
                    <div className="topDashboard row">
                        <div className="col-md-6">
                            <h3 className="page-title">{this.props.dashboard.hotel.name} 
                                <small> dashboard & statistics </small> 
                            </h3>
                        </div>
                        <div className="col-md-6">
                            <div className="pull-right">
                                <div className="form-group form-md-line-input">
                                    <span>{I18n.t('general.dashboard_date')}: </span>
                                    <DatePicker
                                        className="form-control"
                                        dateFormat="dddd DD MMMM Y" 
                                        selected={this.state.startDate}
                                        onChange={(e) => this.dateChange(e)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <DashboardStat key="dash1" name={I18n.t('dashboard.stats.freerooms', {count: this.props.dashboard.available_rooms_today})} value={this.props.dashboard.available_rooms_today} color="green" icon="fa-home" />
                        <DashboardStat key="dash2" name={I18n.t('dashboard.stats.departures', {count: this.props.dashboard.departures_today_count})} value={this.props.dashboard.departures_today_count} color="purple" icon="fa-globe" />
                        <DashboardStat key="dash3" name={I18n.t('dashboard.stats.totalR', {count: this.props.dashboard.total_reservations})} value={this.props.dashboard.total_reservations} color="blue" icon="fa-bar-chart-o" />
                        <DashboardStat key="dash4" name={I18n.t('dashboard.stats.totalP')} value={this.props.dashboard.total_earnings} color="red" icon="fa-money" />
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <Portlet name={I18n.t('general.arrivals')} key="adfasdf" tab1={this.props.dashboard.arivals_today} />
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <Portlet name={I18n.t('general.departures')} key="6asdfsadf" tab1={this.props.dashboard.departures_today}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ReservationsTable reservations={ this.props.dashboard.current_rooms } title={I18n.t('general.current_rooms', { count: this.props.dashboard.current_rooms.length } )}/>
                        </div>
                    </div>
                     <div className="row">
                        <div className="col-md-12">
                            <LineChart config={this.props.dashboard.chart} chartTitle={moment(this.state.startDate).format('MMMM')} yaxis="Rooms" />
                        </div>
                    </div>
                    
                    <div className="clearfix"></div>
                </div>
		);
	}
}
function mapStateToProps(state) {
    return { dashboard: state.dashboard.dashboard,
             loading: state.auth.loading,
             lang: state.i18n
             };
}

export default connect(mapStateToProps, { fetchDashboard })(Dashboard);

