import axios from 'axios'
import jwt from 'jsonwebtoken'
import * as configAPI from './config'

export const signUpUserCall = data => {
    return axios.post(`${configAPI.API_URL}/users/registration`, data)
        .then(response => {
            return {
                status: 200,
                data: response.data
            }
        })
        .catch(err => {
            debugger
        })
}

export const loginUserCall = data => {
    return axios.post(`${configAPI.API_URL}/users/login`, data)
        .then(response => {
            let token_data = response.data.token
            let user_data = jwt.decode(token_data)
            return {
                status: 200,
                data: user_data,
                token: token_data
            }
        })
        .catch(err => {
            return {
                status: 400,
                error_message: err.response.data
            }
        })
}

export const addGroupsCall = data => {
    data['created_by'] = configAPI.userID
    data.roommates.push(configAPI.userID)
    return axios.post(`${configAPI.API_URL}/family/add`, data)
        .then(response => {
            return {
                status: 200,
                data: response.data
            }
        })
        .catch(err => {
            return {
                status: 400,
                error_message: err.response.data
            }
        })
}

export const addMemberCall = (projectID, userID) => {
    return axios.post(`${configAPI.API_URL}/family/${projectID}/add-member/${userID}`)
        .then(response => {
            return {
                status: 200,
                data: response.data
            }
        })
        .catch(err => {
            return {
                status: 400,
                error_message: err.response.data
            }
        })
}