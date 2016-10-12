import React, { Component } from 'react';
import Header from './header/header';
import Menu from './sidebar/menu';
import Footer from './footer/footer';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import moment from "moment";
import { changeLanguage } from '../actions';

class App extends Component {
    componentWillMount() {
        console.log(this.props.location.pathname);
        // if(this.props.location.pathname == "/") {
        //     browserHistory.push('/dashboard');
        // }     
    }
    switchLang(lang){
        this.props.changeLanguage(lang);
    }


   
    render() {
        return (
            <div>
                <Header />
                <div className="clearfix"></div>
                <div className="page-container">
                    <Menu active={ this.props.location.pathname } />
                    <div className="page-content-wrapper">
                        <div className="page-content">
                            <div className="page-bar">
                                <div className="page-toolbar" style={{'float' : 'left', 'width' : '100%'}}>
                                    <div id="dashboard-report-range" className="pull-left">
                                        <i className="icon-calendar"></i>&nbsp;
                                        <span className="thin uppercase hidden-xs">{moment().format('dddd DD MMMM Y')}</span>&nbsp;
                                    </div>
                                    <div className="btn-group pull-right">
                                        <button type="button" className="btn green btn-sm btn-outline dropdown-toggle" data-toggle="dropdown"> Language
                                            <i className="fa fa-angle-down"></i>
                                        </button>
                                        <ul className="dropdown-menu pull-right" role="menu" style={{ 'minWidth':'74px' }}>
                                            <li className={(this.props.lang.locale == 'en') ? 'active ' : ''}> 
                                                <a href="javascript:;" onClick={() => this.switchLang('en')}>
                                                    <i className="icon-speech"></i> EN</a>
                                            </li>
                                            <li className={(this.props.lang.locale == 'el') ? 'active ' : ''}> 
                                                <a href="javascript:;" onClick={() => this.switchLang('el')} >
                                                    <i className="icon-speech"></i> ΕΛ</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                        
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
      }
    }

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        lang: state.i18n
    };
}

export default connect(mapStateToProps, { changeLanguage })(App);

