import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    componentWillMount() {
        // if(this.props.location.pathname == "/") {
        //     browserHistory.push('/dashboard');
        // }     
    }
   
    render() {
        
        return (
            <div>
                <div className="clearfix"></div>
                <div className="page-container">
                    <div className="page-content-wrapper">
                        <h1>Here will go the main page</h1>
                    </div>
                </div>
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

