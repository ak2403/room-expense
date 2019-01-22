import React, { Component } from 'react'
import Input from '../../../Components/input/text-input'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addGroups } from '../../../Redux/Actions/groups-action'

class AddGroups extends Component {
    state = {
        add_family: {
            name: '',
            address: {
                street: '',
                city: '',
                state: '',
                postcode: ''
            },
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

    changeAddress = (key, value) => {
        let { add_family } = this.state
        add_family.address[key] = value
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

            Address
            <Input
                type="text"
                value={add_family.address.street}
                text="Street"
                onChange={e => this.changeAddress('street', e.target.value)} />

            <Input
                type="text"
                value={add_family.address.city}
                text="City"
                onChange={e => this.changeAddress('city', e.target.value)} />

            <Input
                type="text"
                value={add_family.address.state}
                text="State"
                onChange={e => this.changeAddress('state', e.target.value)} />

            <Input
                type="text"
                value={add_family.address.postcode}
                text="Postcode"
                onChange={e => this.changeAddress('postcode', e.target.value)} />

            <Input
                type="text"
                value={add_family.rent}
                text="Rent of the place"
                onChange={e => this.changeValue('rent', e.target.value)} />

            <button className="theme-button" type="submit">Create group</button>
        </form>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addGroups
}, dispatch)

export default connect(null, mapDispatchToProps)(AddGroups)