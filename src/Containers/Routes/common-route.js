import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { resetSettings } from '../../Redux/Actions/authentication-actions'

class CommonRoute extends Component {

    componentDidMount = () => {
        let get_token = localStorage.getItem('authToken')
        if (get_token) {
            this.props.history.push('/groups')
        }
    }

    shouldComponentUpdate = nextProps => {
        let { is_login_completed } = nextProps

        if (is_login_completed) {
            this.props.history.push('/groups')
        }

        return true
    }

    render() {
        let Component = this.props.render || this.props.component
        
        return (<div className="container-center">
            <div className="container-info">

            </div>
            <div className="container-auth-form">
                <div className="auth-forms">
                    <Component />
                </div>
            </div>
        </div>)
    }
}

const mapStateToProps = props => {
    let { authentication } = props

    return {
        user_info: authentication.user_info,
        is_login_completed: authentication.is_login_completed
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ resetSettings }, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommonRoute))