import React, { Component } from 'react';
import moment from "moment";
import TableCell from './table_cell';

class TableBody extends Component { 
    
    componentDidMount(){
        
    }
    renderRow(){

      const start = moment(this.props.start);
      const rooms = this.props.rooms;
      var cells = [];




    }

    render() {
        return(
            <tbody>
              {Array.apply(null, Array(this.props.rooms)).map(function(item, i){                                        
                    return (
                      <tr>
                          {Array.apply(null, Array(8)).map(function(item, j){  
                            let date = "";
                            if(j != 0){
                              date = moment(this.props.start).add(j-1, 'days').format('DD-MM-YYYY');  
                            }
                            return (
                                <TableCell room={i+1} date={date} />
                            );
                          }, this)}
                      </tr>
                    );                
                }, this)}
              
            </tbody>
        );
    }

}


export default TableBody;