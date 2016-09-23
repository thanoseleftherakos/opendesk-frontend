import React, { Component } from 'react';
import Header from './header/header';
import Menu from './sidebar/menu';
import Footer from './footer/footer';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

// import { Link } from 'react-router';

class App extends Component {
    renderLinks(){
        if(this.props.authenticated) {
            return <span>(authenticated)</span>
        }
        return <span>(not authenticated)</span>
    }
    componentWillMount() {
        // console.log(this.props.authenticated);
        // if(!this.props.authenticated) {
        //     browserHistory.push('/login');
        // }
        // else {
        //     browserHistory.push('/dashboard');
        // }
    } 

    render() {
        return (
        	<div>
        		<Header />
        		<div className="clearfix"> </div>
        		<div className="page-container">
        			<Menu />
                    {this.props.children}
        		</div>
        		<Footer />
        	</div>
        );
      }
    }

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(App);

