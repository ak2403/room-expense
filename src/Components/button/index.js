import React from 'react'

const Button = (props) => {
    let { type, text, onClick, className } = props
    return <div className={`rui-form-element ${className}`}>
        <button type={type} onClick={onClick}>{text}</button>
    </div>
}

export default Button