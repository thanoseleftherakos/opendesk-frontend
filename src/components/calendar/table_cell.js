import React, { Component } from 'react';
import moment from "moment";

class TableCell extends Component { 
    
    componentDidMount(){
        
    }
    renderCell(){
      if(!this.props.date) {
        return (this.props.room);
      }
    }
    render() {
        return(
            <th data-date={this.props.date} data-room={this.props.room}>
            {this.renderCell()}
            </th>
        );
    }

}


export default TableCell;