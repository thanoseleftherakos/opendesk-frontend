import React, { Component } from 'react';

class TextInput extends Component {

	render(){
		return (
			<div className={"form-group form-md-line-input " + ((this.props.data.error && this.props.data.touched) ? 'has-error' : '')}>
                <input 
                	type={this.props.type} 
                	className="form-control" 
                	id="form_control_1" 
                	{...this.props.data} 
                	placeholder={this.props.placeholder ? this.props.placeholder : this.props.name}
                	disabled = {this.props.disabled}
                />
                <label htmlFor="form_control_1">{this.props.name}</label>
                {this.props.data.touched && this.props.data.error && <span className="help-block help-block-error">{this.props.data.error}</span>}
            </div>
		);
	}

}

export default TextInput;