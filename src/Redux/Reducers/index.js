import { combineReducers } from 'redux'
import AuthenticationReducer from './authentication-reducer'
import GroupsReducer from './groups-reducer'

const Reducers = combineReducers({
    authentication: AuthenticationReducer,
    groups: GroupsReducer
})

export default Reducers