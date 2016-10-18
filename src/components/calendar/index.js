import React, { Component } from 'react';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import Calendar from './calendar'

class CalendarPage extends Component { 
    
    render() {
        return(
            <div>
                <h1 className="page-title">{I18n.t('general.calendar')}</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="portlet light bordered">
                            <div className="portlet-body">
                                <Calendar />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default CalendarPage;