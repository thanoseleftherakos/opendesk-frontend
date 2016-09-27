import React, { Component } from 'react';

class CheckBox extends Component {

	render(){
		return (
			<div className="form-group form-md-checkboxes">
	            <div className="md-checkbox-list">
	                <div className="md-checkbox">
	                    <input type="checkbox" id={this.props.data.name} {...this.props.data} checked={this.props.data.value ? 'checked' : ''} className="md-check" />
	                    <label htmlFor={this.props.data.name}>
	                        <span className="inc"></span>
	                        <span className="check"></span>
	                        <span className="box"></span> 
	                        <p>{this.props.name}</p>
	                    </label>
	                </div>
	            </div>
	        </div>
		);
	}

}

export default CheckBox;