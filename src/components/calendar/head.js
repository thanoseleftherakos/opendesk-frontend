import React, { Component } from 'react';
import moment from "moment";

class CalHead extends Component { 
    
    componentDidMount(){
        
    }
    renderHead(){

      let start = moment(this.props.start);
      let end = moment(this.props.start);
      end.add(7, 'days');
      let head=[];
      for (var m = moment(start); m.isBefore(end); m.add(1, 'days')) {
          head.push(<th key={`head-${m.format('DD-MM-YYYY')}`}>{m.format('dddd DD MMMM Y')}</th>);
      }
      return head;


    }

    render() {
        return(
          <thead>
            <tr>
              <th></th>
              {this.renderHead()}
            </tr>
          </thead>
        );
    }

}


export default CalHead;