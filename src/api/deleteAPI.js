import axios from 'axios'
import * as configAPI from './config'

export const logoutUserCall = () => {
    return axios.delete(`${configAPI.API_URL}/api/logout`)
        .then(response => {
            debugger
        })
        .catch(err => {
            return {
                status: 400
            }
        })
}