import * as authenticationTypes from '../Types/authentication-types'

let initialState = {
    is_login_completed: false,
    is_signup_completed: false,
    user_info: {},
    is_user_logout: false,
    redirect_page: ''
}

const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case authenticationTypes.SIGNUP_COMPLETED:
            return Object.assign({}, state, {
                is_signup_completed: true,
                is_login_completed: true,
                user_info: action.payload || {}
            })

        case authenticationTypes.LOGIN_DONE:
            return Object.assign({}, state, {
                is_login_completed: true,
                user_info: action.payload
            })

        case authenticationTypes.UNAUTHORIZATED:
            return Object.assign({}, state, {
                is_user_logout: true
            })

        case authenticationTypes.RETRIEVE_TOKEN:
            return Object.assign({}, state, {
                user_info: action.payload || {}
            })

        case authenticationTypes.RESET_SETTINGS:
            return Object.assign({}, state, {
                is_user_logout: false,
                is_signup_completed: false
            })

        default:
            return state
    }
}

export default AuthenticationReducer