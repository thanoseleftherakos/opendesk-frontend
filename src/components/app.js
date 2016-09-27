import React, { Component } from 'react';
import Header from './header/header';
import Menu from './sidebar/menu';
import Footer from './footer/footer';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class App extends Component {
    componentWillMount() {
        // if(this.props.location.pathname == "/") {
        //     browserHistory.push('/dashboard');
        // }     
    }
   
    render() {
        
        return (
            <div>
                <Header />
                <div className="clearfix"></div>
                <div className="page-container">
                    <Menu />
                    <div className="page-content-wrapper">
                        {this.props.children}
                    </div>
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

