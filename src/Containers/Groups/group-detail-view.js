import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getGroupDetail } from '../../Redux/Actions/groups-action'

class GroupDetails extends Component {

    componentDidMount = () => {
        let { pathname } = this.props.location
        this.props.getGroupDetail(pathname.replace('/groups/', ''))
    }

    render() {
        let { group_details } = this.props
        console.log(group_details)
        return (<div>
            <div>
                <Link to='/groups'><FontAwesomeIcon icon="arrow-left" /></Link>
                <span>{group_details.name}</span>
            </div>

            <div>

            </div>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getGroupDetail
}, dispatch)

const mapStateToProps = props => {
    let { groups } = props
    return {
        group_details: groups.group_details
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroupDetails))