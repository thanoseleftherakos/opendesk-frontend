import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from "moment";

class DatePickerField extends Component {

	render(){
		return (
            <div className={"form-group form-md-line-input left " + ((this.props.data.error && this.props.data.touched) ? 'has-error' : '')}>
                <label htmlFor="form_control_1">{this.props.name}</label>
                <DatePicker 
                    {...this.props.data}
                    className="form-control"
                    dateFormat="YYYY/MM/DD" 
                    startDate={this.props.startDate}
                    endDate={this.props.endDate}
                    selected={ this.props.selected } 
                    onChange={value => this.props.data.onChange(value) }
                />
                {this.props.data.touched && this.props.data.error && <span className="help-block help-block-error">{this.props.data.error}</span>}
            </div>           
		);
	}

}

export default DatePickerField;