import React, {Component} from 'react';
import Topmenu from './topmenu/topmenu';
var logo = require('../../theme/opendesk_logo_white_small.png');

class Header extends Component{
	componentDidMount(){
		// QuickSidebar.init();
	}
	render() {
		return (
			<div className="page-header navbar navbar-fixed-top">
	            <div className="page-header-inner ">
	                <div className="page-logo">
	                    <a href="/hotel/dashboard">
	                        <img src={logo} alt="logo" className="logo-default" /> </a>
	                </div>
	                <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
	                <Topmenu />
	            </div>
        	</div>
		);
	}
}

export default Header;