import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Panel = props => {
    let { options } = props

    let panelDOM = options.map(list => {
        return <Link to={list.route}>
            <div className="panel-element">
                <span>{list.text}</span>
            </div>
        </Link>
    })

    return (<div className="rui-panel">
        {panelDOM}
    </div>)
}

Panel.defaultProps = {
    options: []
};

Panel.propTypes = {
    options: PropTypes.array
}

export default Panel