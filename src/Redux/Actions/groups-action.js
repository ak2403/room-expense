import * as groupsTypes from '../Types/groups-types'
import * as getAPI from '../../api/getAPI'
import * as postAPI from '../../api/postAPI'
import * as deleteAPI from '../../api/deleteAPI'
import * as configAPI from '../../api/config';

export const getGroups = () => {
    return async dispatch => {
        let getResponse = await getAPI.getGroupsCall()
        if(getResponse.status === 200){
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
        if(getResponse.status === 200){
            let getGroups = await getAPI.getGroupsCall()
            dispatch({
                type: groupsTypes.ADDED_GROUP,
                payload: getGroups.data
            })
        }
    }
}

export const resetSettings = () => {
    return {
        type: groupsTypes.RESET_SETTINGS
    }
}