import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

class LineChart extends Component {
	componentDidMount(){
		
	}
	componentWillMount(){

	}
	renderChart(){
		var props = this.props.config;
		var reservations = [];
    var categories = [];
		props.map((data, index) => {
            reservations.push(data.sum);
            categories.push(data.day);
        });
		var config = {
            title: {
                text: this.props.chartTitle
            },
          xAxis: {
            categories: categories
          },
          yAxis: {
            title: {
                text: this.props.yaxis
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: '#808080'
            }]
           },
          series: [{
            name: this.props.yaxis,
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

export default LineChart;