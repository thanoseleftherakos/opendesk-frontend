import React, { Component } from 'react';
import { Link } from 'react-router';
import { I18n } from 'react-redux-i18n';

class Menu2 extends Component {
	render() {
		return (
			<div className="page-sidebar-wrapper">
                <div className="page-sidebar navbar-collapse collapse">
                    <ul className="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                        <li className={'nav-item ' + (this.props.active == '/hotel/dashboard' ? 'active' : '') }>
                            <Link to={'/hotel/dashboard'} className="nav-link nav-toggle">
                                <i className="icon-home"></i>
                                <span className="title">Dashboard</span>
                                {(this.props.active == '/hotel/dashboard') && 
                                    <span className="selected"></span>
                                }
                            </Link>
                        </li>
                        <li className={'nav-item ' + (this.props.active == '/hotel/reservations' ? 'active' : '') }>
                            <Link to={'/hotel/reservations'} className="nav-link nav-toggle">
                                <i className="icon-calendar"></i>
                                <span className="title">{I18n.t('general.reservations')}</span>
                                {(this.props.active == '/hotel/reservations') && 
                                    <span className="selected"></span>
                                }
                            </Link>
                        </li>
                        <li className={'nav-item ' + (this.props.active == '/hotel/reservation/create' ? 'active' : '') }>
                            <Link to={'/hotel/reservation/create'} className="nav-link nav-toggle">
                                <i className="icon-event"></i>
                                <span className="title">{I18n.t('general.new_reservation')}</span>
                                {(this.props.active == '/hotel/reservation/create') && 
                                    <span className="selected"></span>
                                }
                            </Link>
                        </li>
                        <li className={'nav-item ' + (this.props.active == '/hotel/availability' ? 'active' : '') }>
                            <Link to={'/hotel/availability'} className="nav-link nav-toggle">
                                <i className="icon-calendar"></i>
                                <span className="title">{I18n.t('general.availability')}</span>
                                {(this.props.active == '/hotel/availability') && 
                                    <span className="selected"></span>
                                }
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
		);
	}
}

export default Menu2;
