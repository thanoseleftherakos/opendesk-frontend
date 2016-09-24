import React, { Component } from 'react';


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
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <i className="icon-home"></i>
                                <span className="title">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <i className="icon-settings"></i>
                                <span className="title">Form Stuff</span>
                                <span className="arrow"></span>
                            </a>
                        </li>
                        <li className="heading">
                            <h3 className="uppercase">Layouts</h3>
                        </li>
                        <li className="nav-item  active open">
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <i className="icon-layers"></i>
                                <span className="title">Page Layouts</span>
                                <span className="selected"></span>
                                <span className="arrow open"></span>
                            </a>
                            <ul className="sub-menu">
                                <li className="nav-item  active open">
                                    <a href="layout_blank_page.html" className="nav-link ">
                                        <span className="title">Blank Page</span>
                                        <span className="selected"></span>
                                    </a>
                                </li>
                                <li className="nav-item  ">
                                    <a href="layout_classNameic_page_head.html" className="nav-link">
                                        <span className="title">ClassNameic Page Head</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="heading">
                            <h3 className="uppercase">Pages</h3>
                        </li>
                        <li className="nav-item  ">
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <i className="icon-basket"></i>
                                <span className="title">eCommerce</span>
                                <span className="arrow"></span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <i className="icon-docs"></i>
                                <span className="title">Apps</span>
                                <span className="arrow"></span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <i className="icon-user"></i>
                                <span className="title">User</span>
                                <span className="arrow"></span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <i className="icon-social-dribbble"></i>
                                <span className="title">General</span>
                                <span className="arrow"></span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <i className="icon-settings"></i>
                                <span className="title">System</span>
                                <span className="arrow"></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <i className="icon-folder"></i>
                                <span className="title">Multi Level Menu</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
		);
	}
}

export default Menu;
