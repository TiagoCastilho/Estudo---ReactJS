/*
const initialState = {  
    email: ''
};

export default (state = initialState, action) => {

    if(action.type === 'SET_EMAIL') {
        return { ...state, email:action.payload.email };
    }

    return state;
}
*/

const initialState = {  
    email: '',
}

const useReducer = ( state = initialState, action ) => {

    if(action.type === 'SET_EMAIL') {
        return { ...state, email:action.payload.email };
    }

    return state;
}

export default useReducer;
