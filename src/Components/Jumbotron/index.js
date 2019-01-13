import React from 'react'

const Jumbotron = props => {
    let { header } = props
    return (<div className="rui-jumbotron">
        <h1>{header}</h1>
    </div>)
}

export default Jumbotron