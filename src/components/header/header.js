import React, {Component} from 'react';
import Topmenu from './topmenu/topmenu';

class Header extends Component{
	render() {
		return (
			<div className="page-header navbar navbar-fixed-top">
	            <div className="page-header-inner ">
	                <div className="page-logo">
	                    <a href="index.html">
	                        <img src="" alt="logo" className="logo-default" /> </a>
	                    <div className="menu-toggler sidebar-toggler"> </div>
	                </div>
	                <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
	                <Topmenu />
	            </div>
        	</div>
		);
	}
}

export default Header;