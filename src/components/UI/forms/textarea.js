import React, { Component } from 'react';

class TextArea extends Component {

	render(){
		return (
			<div className={"form-group form-md-line-input " + ((this.props.data.error && this.props.data.touched) ? 'has-error' : '')}>
                <textarea className="form-control" {...this.props.data} rows="3"></textarea>
                <label htmlFor="form_control_1">{this.props.name}</label>
                {this.props.data.touched && this.props.data.error && <span className="help-block help-block-error">{this.props.data.error}</span>}
            </div>            
		);
	}

}

export default TextArea;