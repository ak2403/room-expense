import React from 'react'

const FormInput = props => {
    let { label, value } = props
    
    return (<div className="rui-form-seperate">
        <label>{label}</label>
        <input type="text" value={value} />
    </div>)
}

export default FormInput