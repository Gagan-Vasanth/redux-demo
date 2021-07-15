const initialState = {
    displayName: '',
    email: '',
    authenticated: false
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'USER_LOGIN_REQUEST' : return state;
        case 'USER_LOGIN_SUCCESS' : return {
            ...state,
            displayName: action.payload.displayName,
            email: action.payload.email,
            authenticated: true,
        };
        case 'USER_LOGIN_FAILURE' : return state;
        //this is for logout 
        case 'USER_LOGOUT_REQUEST' : return state;
        case 'USER_LOGOUT_SUCCESS' : return {
            ...state,
            authenticated: false,
        };
        case 'USER_LOGOUT_FAILURE' : return state;
        default: return state;
    }
}

export default reducer;