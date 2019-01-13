import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SideBarNav from '../../Components/navigation/side-bar-nav'
import Header from '../../Components/header'
import { resetSettings, logoutUser } from '../../Redux/Actions/authentication-actions'

class ProtectedRoute extends Component {

    componentDidMount = () => {
        let get_token = localStorage.getItem('authToken')
        if (!get_token) {
            this.props.history.push('/login')
        }
    }

    shouldComponentUpdate = nextProps => {
        let { is_user_logout, user_info } = nextProps

        if (is_user_logout) {
            localStorage.removeItem('authToken')
            this.props.history.push('/login')
            this.props.resetSettings()
        }

        return true
    }

    render() {
        let Component = this.props.render || this.props.component
        let { user_info } = this.props
        let nav_options = [{
            text: 'Projects',
            route: 'projects'
        }, {
            text: 'Issues',
            route: 'issues'
        }, {
            text: 'Manage',
            route: 'manage_company'
        }]

        return (<div className="app-container">
            <div className="app-nav-container">
                {/* <SideBarNav
                    menu={nav_options}
                /> */}
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