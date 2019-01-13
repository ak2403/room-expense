import React from 'react'

const Button = (props) => {
    let { type, text, onClick, className } = props
    return <div className={`rui-form-element`}>
        <button className= {`${className}`} type={type} onClick={onClick}>{text}</button>
    </div>
}

export default Button