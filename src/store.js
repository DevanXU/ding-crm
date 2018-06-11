import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import customerReducer from './reducers/customerReducer'

export default createStore(
    combineReducers({ customerReducer }),
    {},
    applyMiddleware(logger)
)