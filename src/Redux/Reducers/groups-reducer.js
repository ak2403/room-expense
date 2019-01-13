import * as groupsTypes from '../Types/groups-types'

let initialState = {
    groups_list: [],
    group_details: {},
    is_added_group: false
}

const GroupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case groupsTypes.GET_GROUP:
            return Object.assign({}, state, {
                groups_list: action.payload || []
            })

        case groupsTypes.GET_GROUP_DETAILS:
            return Object.assign({}, state, {
                group_details: action.payload || {}
            })

        case groupsTypes.ADDED_GROUP:
            return Object.assign({}, state, {
                is_added_group: true,
                groups_list: action.payload || []
            })

        case groupsTypes.RESET_SETTINGS:
            return Object.assign({}, state, {
                is_added_group: false
            })

        default:
            return state
    }
}

export default GroupsReducer