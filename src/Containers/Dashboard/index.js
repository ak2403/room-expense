import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logoutUser } from '../../Redux/Actions/authentication-actions'

class DashboardView extends Component{
    render(){
        return <div>
            Dashboard
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logoutUser }, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)