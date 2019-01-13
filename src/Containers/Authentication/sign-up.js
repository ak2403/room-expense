import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Validations from '../validations'
import Input from '../../Components/input/text-input'
import Button from '../../Components/button'
import { signUpUser } from '../../Redux/Actions/authentication-actions'

class SignUp extends Component {
    state = {
        user_data: {
            username: '',
            useremail: '',
            password: ''
        },
        validations: {
            username: false,
            useremail: false,
            password: false
        }
    }

    changeValue = (name, value) => {
        let { user_data } = this.state
        user_data[name] = value
        this.setState({
            user_data: user_data
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
            this.props.signUpUser(this.state.user_data)
        
    }

    render() {
        return <React.Fragment>
            <form onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    text="User Name"
                    placeholder="Enter your name"
                    onChange={e => this.changeValue('username', e.target.value)} />

                <Input
                    type="text"
                    text="User Email"
                    placeholder="Enter your email"
                    onChange={e => this.changeValue('useremail', e.target.value)} />

                <Input
                    type="password"
                    text="Password"
                    placeholder="Enter your password"
                    onChange={e => this.changeValue('password', e.target.value)} />

                <Button type="submit" text="Signup" />
            </form>
            <div className="auth-options">
                <Link to="/login">Have an account? Login here</Link>
            </div>
        </React.Fragment>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    signUpUser
}, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)