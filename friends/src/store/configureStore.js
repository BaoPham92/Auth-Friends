import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import friendsReducer from '../reducers/friends';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            friends: friendsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
} 