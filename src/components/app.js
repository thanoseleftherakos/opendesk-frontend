import React, { Component } from 'react';
import Header from './header/header';
import Menu from './sidebar/menu';
import Footer from './footer/footer';

export default class App extends Component {
  render() {
    return (
    	<div>
    		<Header />
    		<div className="clearfix"> </div>
    		<div className="page-container">
    			<Menu />
                {this.props.children}
    			<div className="page-content-wrapper">
	                <div className="page-content">
	                    <h3 className="page-title"> Blank Page Layout
	                        <small>blank page layout</small>
	                    </h3>
	                    <div className="note note-info">
	                        <p>A black page template with a minimal dependency assets to use as a base for any custom page you create </p>
	                    </div>
	                </div>
            	</div>
    		</div>
    		<Footer />
    	</div>
    );
  }
}

