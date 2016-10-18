import React, { Component } from 'react';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import styles from './calendar.scss'; 
import CalHead from './head';
import TableBody from './table_body';
import moment from "moment";

class Calendar extends Component { 
    
    componentDidMount(){
        const { calendar } = this.refs;
    }

    render() {
        return(
            <div className="reservation_calendar" ref="calendar">
                <table>
                    <CalHead start={moment()}/>
                    <TableBody start={moment()} rooms={14}/>
                </table>                
            </div>
        );
    }

}


export default Calendar;