import { combineReducers } from 'redux'
import AuthenticationReducer from './authentication-reducer'

const Reducers = combineReducers({
    authentication: AuthenticationReducer
})

export default Reducers