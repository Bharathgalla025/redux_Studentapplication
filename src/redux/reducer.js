import * as types from './actiontype';



const initialstate = {
    users: [],
    user: {},
    loading: true
}

const userReducers = (state = initialstate, action) => {
    switch (action.type) {
        case types.GET_STUDENTS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case types.ADD_STUDENT:
            return {
                ...state,
                laoding: false
            }
        case types.EDIT_STUDENT:
            return {
                ...state,
                user: action.payload,
                loading: false
            }

        case types.UPDATE_STUDENT:
            return {
                ...state,
                loading: false
            }
        case types.DELETE_STUDENT:
            return {
                ...state,
                loading: false
            }
        default:
            return {
                state
            }
    }
}


export default userReducers;