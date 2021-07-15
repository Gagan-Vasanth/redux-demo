import firebase from "firebase";

export const signin = () => {
    return async (dispatch) => {
        dispatch({ type: 'USER_LOGIN_REQUEST'});
        var provider = new firebase.auth.GoogleAuthProvider();
        const response = await firebase.auth().signInWithPopup(provider);
        if(response) {
            console.log(response.user.displayName);
            dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.user})
        }
        else {
            dispatch({ type: 'USER_LOGIN_FAILURE'});
        }
    }
}

export const logout = () => {
    return async(dispatch) => {
        dispatch({type: 'USER_LOGOUT_SUCCESS'});
        console.log('User logged out!!');
    }   
}