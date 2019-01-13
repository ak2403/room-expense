import * as authenticationTypes from '../Types/authentication-types'
import * as getAPI from '../../api/getAPI'
import * as postAPI from '../../api/postAPI'
import * as deleteAPI from '../../api/deleteAPI'
import * as configAPI from '../../api/config';

export const signUpUser = data => {
    return async dispatch => {
        let getResponse = await postAPI.signUpUserCall(data)
        if (getResponse.status === 200) {
            let getUserDetails = await configAPI.retrieveToken(getResponse.data.token)
            dispatch({
                type: authenticationTypes.SIGNUP_COMPLETED,
                payload: getUserDetails.data
            })
        } else {

        }
    }
}

export const retrieveCall = () => {
    return async dispatch => {
        let getResponse = await configAPI.retrieveToken()
        dispatch({
            type: authenticationTypes.RETRIEVE_TOKEN,
            payload: getResponse.data
        })
    }
}

export const loginUser = data => {
    return async dispatch => {
        let getResponse = await postAPI.loginUserCall(data)
        if (getResponse.status === 200) {
            let getUserDetails = await configAPI.retrieveToken(getResponse.token)
            dispatch({
                type: authenticationTypes.LOGIN_DONE,
                payload: getResponse.data,
                token_data: getResponse.token
            })
        }
    }
}

export const logoutUser = () => {
    return async dispatch => {
        let getResponse = await deleteAPI.logoutUserCall()
        if (getResponse.status === 200) {
            dispatch({
                type: authenticationTypes.LOGOUT
            })
        } else {
            dispatch({
                type: authenticationTypes.UNAUTHORIZATED
            })
        }
    }
}

export const resetSettings = () => {
    return {
        type: authenticationTypes.RESET_SETTINGS
    }
}