// * TYPES
import { LOGIN, SEARCH, CREATE_FRIEND, DELETE_FRIEND } from '../actions/friends';


const friendsDefaultState = {
    username: undefined,
    password: undefined,
    dataType: undefined,
    id: Date.now()
}

export default (state = friendsDefaultState, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                ...state
            }
        case SEARCH:
            return {
                ...state
            }
        case CREATE_FRIEND:
            return {
                ...state
            }
        case DELETE_FRIEND:
            return {
                ...state
            }
        default:
            return state
    }
}