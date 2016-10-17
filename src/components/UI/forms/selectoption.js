import React, { Component } from 'react';

class SelectOption extends Component {


	renderOptions(){
        return this.props.options.map((data, index) => (
                <option key={data.name} value={data.id}>{data.name}</option>
            ));
    }

	render(){
		return (
			<div className={"form-group form-md-line-input " + ((this.props.data.error && this.props.data.touched) ? 'has-error' : '')}>
	            <select className="form-control" {...this.props.data} >
	            <option value="" disabled>Select</option>
	                {this.renderOptions()}
	            </select>
	            <label htmlFor="form_control_1">{this.props.name}</label>
	            {this.props.data.touched && this.props.data.error && <span className="help-block help-block-error">{this.props.data.error}</span>}
	        </div>
		);
	}

}

export default SelectOption;