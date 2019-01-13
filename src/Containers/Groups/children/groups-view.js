import React, { Component } from 'react'
import Input from '../../../Components/input/text-input'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getGroups } from '../../../Redux/Actions/groups-action'

class AddGroups extends Component {
    state = {
    }

    componentDidMount = () => this.props.getGroups()

    render() {
        let { groups_list } = this.props
        return (<div>
            {groups_list.map(list => {
                return <div>{list.name}</div>
            })}
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getGroups
}, dispatch)

const mapStateToProps = props => {
    let { groups } = props
    return {
        groups_list: groups.groups_list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGroups)