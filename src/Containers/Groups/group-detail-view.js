import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import Input from '../../Components/input/text-input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getGroupDetail, searchMembers, addMember } from '../../Redux/Actions/groups-action'

class GroupDetails extends Component {
    state = {
        showInput: false
    }

    showInput = () => this.setState({ showInput: !this.state.showInput })

    componentDidMount = () => {
        let { pathname } = this.props.location
        this.props.getGroupDetail(pathname.replace('/groups/', ''))
    }

    searchMembers = (value) => {
        this.props.searchMembers(value)
    }

    addMember = id => {
        let { group_details } = this.props
        this.props.addMember(group_details._id, id)
    }

    renderMembers = () => {
        let { group_details } = this.props

        return <div>
            {group_details.roommates ? group_details.roommates.map(member => {
                return <div className="group-member">
                    <span>{member.username}</span>
                    <p>{member.useremail}</p>
                </div>
            }) : ''}
        </div>
    }

    renderFilterMembers = () => {
        let { filtered_members } = this.props
        return <div className="filtered-members">
            {filtered_members.map(member => {
                return <div className="filtered-member" onClick={e => this.addMember(member._id)}>
                    <span>{member.username}</span>
                    <p>{member.useremail}</p>
                </div>
            })}
        </div>
    }

    render() {
        let { showInput } = this.state
        let { group_details } = this.props

        return (<div className="groups-details-container">
            <div className="groups-details-header">
                <div className="back-anchor" to='/groups'>
                    <FontAwesomeIcon icon="arrow-left" />
                </div>
                <span className="group-title">{group_details.name}</span>
            </div>

            <div className="groups-content-container">
                <div className="group-content">

                </div>
                <div className="group-members">
                    <h4>Members</h4>
                    {this.renderMembers()}

                    {showInput ? <Input text="Add Member" onChange={e => this.searchMembers(e.target.value)} /> : ''}
                    {showInput ? this.renderFilterMembers() : ''}
                    <FontAwesomeIcon className="add" icon="plus" onClick={this.showInput} />
                </div>
            </div>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getGroupDetail,
    searchMembers,
    addMember
}, dispatch)

const mapStateToProps = props => {
    let { groups } = props
    return {
        group_details: groups.group_details,
        filtered_members: groups.filtered_members
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroupDetails))