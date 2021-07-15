import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../actions/auth.actions';

class Home extends Component {
   
    render() {
        if(!this.props.authenticated) {
            return(<Redirect to="/login" />)
        }
        return (
            <div>
               <h1>{this.props.name}</h1>
               <h2>{this.props.email}</h2>
               <button onClick={this.props.logoutHandler}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.auth.displayName,
        email: state.auth.email,
        authenticated: state.auth.authenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutHandler: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

