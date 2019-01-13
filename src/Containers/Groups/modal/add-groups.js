import React, { Component } from 'react'
import Input from '../../../Components/input/text-input'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addGroups } from '../../../Redux/Actions/groups-action'

class AddGroups extends Component {
    state = {
        add_family: {
            name: '',
            address: '',
            state: '',
            postcode: '',
            rent: '',
            roommates: []
        }
    }

    changeValue = (key, value) => {
        let { add_family } = this.state
        add_family[key] = value
        this.setState({
            add_family
        })
    }

    submitGroup = e => {
        e.preventDefault()
        let { add_family } = this.state
        this.props.addGroups(add_family)
    }

    render() {
        let { add_family } = this.state
        return (<form onSubmit={this.submitGroup}>
            <Input
                type="text"
                value={add_family.name}
                text="Name of the group"
                onChange={e => this.changeValue('name', e.target.value)} />

            <Input
                type="text"
                value={add_family.address}
                text="Address of the place"
                onChange={e => this.changeValue('address', e.target.value)} />

            <Input
                type="text"
                value={add_family.rent}
                text="Rent of the place"
                onChange={e => this.changeValue('rent', e.target.value)} />

            <button type="submit">Create group</button>
        </form>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addGroups
}, dispatch)

export default connect(null, mapDispatchToProps)(AddGroups)