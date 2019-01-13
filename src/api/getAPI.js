import axios from 'axios'
import * as configAPI from './config'

export const getGroupsCall = () => {
    return axios.get(`${configAPI.API_URL}/family/${configAPI.userID}`)
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

export const getGroupDetailCall = id => {
    return axios.get(`${configAPI.API_URL}/family/${configAPI.userID}/${id}`)
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

export const searchMembersCall = value => {
    return axios.get(`${configAPI.API_URL}/users/search/${value}`)
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