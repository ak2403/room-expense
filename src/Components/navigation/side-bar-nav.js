import React from 'react'
import {Link} from 'react-router-dom'
import uuid from 'uuid/v4'

const SideBarNav = (props) => {
    let { menu } = props

    let nav_DOM = menu.map(list => {
        return <Link to={`/${list.route}`} key={uuid()}><div className="rui-nav">{list.text}</div></Link>
    })

    return (<div className="rui-side-nav">
        <div className="nav-logo">

        </div>
        <div className="rui-nav-list">
            {nav_DOM}
        </div>
    </div>)
}

SideBarNav.defaultValue = {
    menu: []
}

export default SideBarNav