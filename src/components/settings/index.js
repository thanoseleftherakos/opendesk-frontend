import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, addArrayValue } from 'redux-form';
import { Link } from 'react-router';
import TextInput from './../UI/forms/textinput';
import SelectOption from './../UI/forms/selectoption';
import DatePickerField from './../UI/forms/datepicker';
import { settings } from '../../actions/index';
import moment from "moment";
import Loader from './../UI/loader';
import Alert from '../UI/alerts';
import ReservationsTable from './../UI/reservations_table';
import { I18n } from 'react-redux-i18n';

class Settings extends Component { 
    
    componentWillMount(){
        if(!this.props.hotel_settings){
            this.props.settings();
        }
    }
    componentDidUpdate(){
        App.init();
        Layout.init();
    }
	handleFormSubmit(formProps) {
        console.log(formProps);
    }
    // renderRoomTypes(types){
    //     return types.map((type, index) => (
    //             <p>{type.name}</p>
    //         ));
    // }


	render() {
		const { handleSubmit, fields: { name, email, total_rooms, room_types} } = this.props;
        if(!this.props.hotel_settings) {
            return <Loader /> 
        }

		return(
			<div>
                <h1 className="page-title">{I18n.t('general.settings')}</h1>
                <div className="row">
	                <div className="col-md-12">
                        <div className="portlet light bordered">
                            <div className="portlet-title">
                                <div className="caption font-green">
                                    <i className="icon-settings font-green"></i>
                                    <span className="caption-subject bold uppercase"> {I18n.t('general.edit_hotel')}</span>
                                </div>
                            </div>
                            <div className="portlet-body form">
                                <form role="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                    <div className="form-body">
                                        <TextInput type="text" name={I18n.t('forms.name')} data={name} />
                                        <TextInput type="email" name={I18n.t('forms.email')} data={email} />
                                        <TextInput type="number" name={I18n.t('forms.total_rooms')} disabled="true" data={total_rooms} />
                                        <br/>
                                        <h4 className="form-section">{I18n.t('forms.room_types')}</h4>
                                        {room_types.map((type, index) => 
                                            <div>
                                                <TextInput type="text" name={I18n.t('forms.name')} data={type.name} />
                                                <TextInput type="text" name={I18n.t('forms.amount')} data={type.amount} />
                                                <button type="button" onClick={() => {
                                                    room_types.removeField(index)  // remove from index
                                                  }}><i/> Remove
                                                  </button>
                                            </div>
                                        )}
                  
                                        <button type="button" onClick={() => {
                                            room_types.addField();    // pushes empty child field onto the end of the array
                                            }}><i/> {I18n.t('forms.add_room_type')}
                                        </button>
        
                                        <div className="form-actions noborder">
                                            <button type="submit" className="btn blue">{I18n.t('forms.update')}</button>
                                        </div>

                                        
                                    </div>
                                </form>
                            </div>
                        </div>
	               	</div>
                </div>
            </div>
		);
	}

}

function mapStateToProps(state) {
	return {
        hotel_settings: state.general.settings,
        initialValues: state.general.settings,
        lang: state.i18n
	};
}


export default reduxForm({
    
    form: 'edit_reservation',
    fields: ['name', 'email', 'total_rooms', 'room_types[].name', 'room_types[].amount', 'children']

}, mapStateToProps, { settings })(Settings);