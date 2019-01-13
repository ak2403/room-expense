import React, { Component } from 'react'
import Button from '../button'

class Header extends Component {
    render() {
        return (<div className="rui-header">
            <Button text="Logout" onClick={this.props.onLogout} />
        </div>)
    }
}

export default Header