import * as groupsTypes from '../Types/groups-types'
import * as getAPI from '../../api/getAPI'
import * as postAPI from '../../api/postAPI'
import * as deleteAPI from '../../api/deleteAPI'
import * as configAPI from '../../api/config';

export const getGroups = () => {
    return async dispatch => {
        let getResponse = await getAPI.getGroupsCall()
        if (getResponse.status === 200) {
            dispatch({
                type: groupsTypes.GET_GROUP,
                payload: getResponse.data
            })
        }
    }
}

export const addGroups = data => {
    return async dispatch => {
        let getResponse = await postAPI.addGroupsCall(data)
        if (getResponse.status === 200) {
            let getGroups = await getAPI.getGroupsCall()
            dispatch({
                type: groupsTypes.ADDED_GROUP,
                payload: getGroups.data
            })
        }
    }
}

export const getGroupDetail = id => {
    return async dispatch => {
        let getResponse = await getAPI.getGroupDetailCall(id)
        if (getResponse.status === 200) {
            dispatch({
                type: groupsTypes.GET_GROUP_DETAILS,
                payload: getResponse.data
            })
        }
    }
}

export const searchMembers = value => {
    return async dispatch => {
        let getResponse = await getAPI.searchMembersCall(value)
        if (getResponse.status === 200) {
            dispatch({
                type: groupsTypes.GET_FILTERED_MEMBERS,
                payload: getResponse.data
            })
        }
    }
}

export const addMember = (projectID, userID) => {
    return async dispatch => {
        let getResponse = await postAPI.addMemberCall(projectID, userID)
        if (getResponse.status === 200) {
            dispatch({
                type: groupsTypes.UPDATE_FAMILY_MEMBERS,
                payload: getResponse.data
            })
        }
    }
}

export const resetSettings = () => {
    return {
        type: groupsTypes.RESET_SETTINGS
    }
}