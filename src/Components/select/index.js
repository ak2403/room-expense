import React from 'react'
import PropTypes from 'prop-types'

const Select = (props) => {
    let { text, options, onChange, value } = props

    let option_DOM = options.map((list, index) => {
        return <option index={index} value={list.value} selected={value === list.value ? 'selected' : ''}>{list.name}</option>
    })

    return (<div className="rui-form-element">
        <label>
            {text}
        </label>
        <select onChange={onChange}>
        {/* disabled="disabled" */}
            <option selected="true">Choose option</option>
            {option_DOM}
        </select>
    </div >)
}

Select.defaultProps = {
    options: []
};

Select.propTypes = {
    options: PropTypes.array
}

export default Select