import React, { Component } from 'react'
import Modal from '../../Components/modal'
import AddGroups from './modal/add-groups'

class GroupsView extends Component {
    state = {
        addFamily: true
    }

    toggleModal = () => this.setState({ addFamily: !this.state.addFamily })

    render() {
        let { addFamily } = this.state
        return (<div>
            Groups
            <button onClick={this.toggleModal}>Add Group</button>
            {addFamily ? <Modal title="Add Group" content={<AddGroups />} closeModal={this.toggleModal} /> : ''}
        </div>)
    }
}

export default GroupsView