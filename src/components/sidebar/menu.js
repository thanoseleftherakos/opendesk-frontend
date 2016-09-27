import React, { Component } from 'react';
import { Link } from 'react-router'

class Menu extends Component {
	render() {
		return (
			<div className="page-sidebar-wrapper">
                <div className="page-sidebar navbar-collapse collapse">
                    <ul className="page-sidebar-menu  page-header-fixed" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                        <li className="sidebar-toggler-wrapper hide">
                            <div className="sidebar-toggler"> </div>
                        </li>
                        <li className="nav-item start ">
                            <Link to={'/dashboard'} className="nav-link nav-toggle">
                                <i className="icon-home"></i>
                                <span className="title">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item start ">
                            <Link to={'/reservations'} className="nav-link nav-toggle">
                                <i className="icon-calendar"></i>
                                <span className="title">Reservations</span>
                            </Link>
                        </li>
                        <li className="nav-item start ">
                            <Link to={'/reservation/create'} className="nav-link nav-toggle">
                                <i className="icon-plus"></i>
                                <span className="title">New Reservation</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
		);
	}
}

export default Menu;
