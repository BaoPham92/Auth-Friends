// * TYPES
export const LOGIN = 'LOGIN';
export const SEARCH = 'SEARCH';
export const CREATE_FRIEND = 'CREATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

// * RETURNED PAYLOADS
export const login = (data) => ({
    type: LOGIN,
    payload: data
})

export const search = (data) => ({
    type: SEARCH,
    payload: data
})

export const createFriend = (data) => ({
    type: CREATE_FRIEND,
    payload: data
})

export const deleteFriend = (data) => ({
    type: DELETE_FRIEND,
    payload: data
})

// * LOGIC
export const startLogin = (newData) => {
    return dispatch => {
        dispatch();
    }
}
export const startSearch = (newData) => {
    return dispatch => {
        dispatch();
    }
}
export const startCreateFriend = (newData) => {
    return dispatch => {
        dispatch();
    }
}
export const startDeleteFriend = (newData) => {
    return dispatch => {
        dispatch();
    }
}