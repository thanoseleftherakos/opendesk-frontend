import React, { Component } from 'react';

class Alert extends Component {
  render() {

    return (
		<div className={'custom-alerts alert fade in alert-' + this.props.type}>
			<button type="button" className="close" data-dismiss="alert" aria-hidden="true"></button>
			<i className={'fa-lg fa fa-' + this.props.icon}></i> {this.props.message}
		</div>
    );
  }
}

export default Alert;