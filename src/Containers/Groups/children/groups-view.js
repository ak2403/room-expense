import React, { Component } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import uuid from 'uuid/v4'
import Input from '../../../Components/input/text-input'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getGroups } from '../../../Redux/Actions/groups-action'

class AddGroups extends Component {
    state = {
    }

    componentDidMount = () => this.props.getGroups()

    renderView = () => {
        let { groups_list } = this.props
        let render_view = groups_list.map(list => {
            var convert_date = moment(list.created_on, 'YYYY/MM/DD');    
            var month = convert_date.format('MMMM');
            var day   = convert_date.format('D');
            var year  = convert_date.format('YY');

            return <div className="groups" key={uuid()}>
                <div className="details-layout">
                    <span><Link to={{ pathname: `/groups/${list._id}`, query: { id: list._id } }}>{list.name}</Link></span>
                    <ul>
                        <li><FontAwesomeIcon icon="calendar" /> {`${day} ${month} ${year}`}</li>
                        <li>{list.created_by}</li>
                    </ul>
                </div>
                <div className="options-layout">
                    <span><FontAwesomeIcon icon="eye" /></span>
                    <span><FontAwesomeIcon icon="highlighter" /></span>
                </div>

            </div>
        })
        return render_view
    }

    render() {

        return (<React.Fragment>
            {this.renderView()}
        </React.Fragment>)
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