import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SideBarNav from '../../Components/navigation/side-bar-nav'
import Header from '../../Components/header'
import { resetSettings, logoutUser, retrieveCall } from '../../Redux/Actions/authentication-actions'

class ProtectedRoute extends Component {

    shouldComponentUpdate = nextProps => {
        let { is_user_logout } = nextProps

        // if (is_user_logout) {
        //     localStorage.removeItem('authToken')
        //     this.props.history.push('/login')
        //     this.props.resetSettings()
        // }

        return true
    }

    render() {
        let Component = this.props.render || this.props.component
        let { user_info } = this.props
        let nav_options = [{
            text: 'Groups',
            route: 'groups'
        }]

        let get_token = localStorage.getItem('authToken')
        if (!get_token) {
            return this.props.history.push('/login')
        }

        return (<div className="app-container">
            <div className="app-nav-container">
                <SideBarNav
                    menu={nav_options}
                />
            </div>

            <div className="app-main-container">
                <Header onLogout={e => this.props.logoutUser()} />
                <div className="app-content-container">
                    <Component />
                </div>
            </div>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    retrieveCall,
    resetSettings,
    logoutUser
}, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        is_user_logout: authentication.is_user_logout,
        user_info: authentication.user_info
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute))