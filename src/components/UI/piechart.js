import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

class PieChart extends Component {
	componentDidMount(){
		
	}
	componentWillMount(){

	}
	renderChart(){
    let props = this.props.config;
    let pie_data = [];
    props.map((data, index) => {
        pie_data.push({
          name: data.country,
          y: data.total
        });
    });

		let config = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
          text: this.props.chartTitle
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                  
              }
          }
        },
        series: [{
            name: ' ',
            colorByPoint: true,
            data: pie_data
        }]
      };
      return config;
	}

	render() {
		var config = this.renderChart();

		return (
			<ReactHighcharts config={config}></ReactHighcharts>
		);
	}
}

export default PieChart;