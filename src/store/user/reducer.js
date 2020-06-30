import { NEW_USER, QUIT_USER } from "./consts";

const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case QUIT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default :
            return state;
    }
}

export default userReducer