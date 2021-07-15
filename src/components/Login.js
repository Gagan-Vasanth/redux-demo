import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signin } from '../actions/auth.actions';

function Login() {
    
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const signinHandler = () => {
        dispatch(signin())
    }
    if(auth.authenticated) {
        return (<Redirect to="/home" />)
    }

    return (
        <div>
            <button onClick={signinHandler}>Google Signup</button>
        </div>
    )
}

export default Login;
