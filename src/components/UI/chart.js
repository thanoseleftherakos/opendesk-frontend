import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

class Chart extends Component {
	componentDidMount(){
		
	}
	componentWillMount(){

	}
	renderChart(){
		var props = this.props.config;
		var reservations = [];
		props.map((data, index) => (
            reservations.push(data.total)
        ));
		var config = {
            title: {
                text: 'Hotel Reservations'
            },
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          yAxis: {
            title: {
                text: 'Reservations'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
           },
          series: [{
            name: 'Reservations',
            data: reservations
          }]
        };
        return config;
	}

	render() {
		var config = this.renderChart();

		return (
			<ReactHighcharts config = {config}></ReactHighcharts>
		);
	}
}

export default Chart;