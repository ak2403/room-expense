import React from 'react'

const AddressView = props => {
    let { data } = props

    return (<div className="rui-address">
        <h6>Address</h6>
        <div className="rui-address-list">
            <label className="rui-address-label">Street</label>
            <span className="rui-address-span">{data.street}</span>
        </div>
        <div className="rui-address-list">
            <label className="rui-address-label">City</label>
            <span className="rui-address-span">{data.city}</span>
        </div>
        <div className="rui-address-list">
            <label className="rui-address-label">State</label>
            <span className="rui-address-span">{data.state}</span>
        </div>
        <div className="rui-address-list">
            <label className="rui-address-label">Postcode</label>
            <span className="rui-address-span">{data.postcode}</span>
        </div>
    </div>)
}

export default AddressView