import React, { Component } from 'react'
import Modal from '../../Components/modal'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../../Components/button'
import GroupsList from './children/groups-view'
import AddGroups from './modal/add-groups'
import { resetSettings } from '../../Redux/Actions/groups-action'

class GroupsView extends Component {
    state = {
        addFamily: false
    }

    shouldComponentUpdate = nextProps => {
        let { is_added_group } = nextProps

        if (is_added_group) {
            this.setState({
                addFamily: false
            })
            this.props.resetSettings()
        }
        return true
    }

    toggleModal = () => this.setState({ addFamily: !this.state.addFamily })

    render() {
        let { addFamily } = this.state
        let { groups_list } = this.props

        return (<div className="groups-container">
            <div className="groups-header">
                <h3>Groups</h3>
                <Button className="transparent-button" onClick={this.toggleModal} text="Add Group" />
            </div>

            <div className="groups-layout">
                <GroupsList />
            </div>

            {addFamily ? <Modal title="Add Group" content={<AddGroups />} closeModal={this.toggleModal} /> : ''}
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    resetSettings
}, dispatch)

const mapStateToProps = props => {
    let { groups } = props
    return {
        groups_list: groups.groups_list,
        is_added_group: groups.is_added_group
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupsView)