import React from 'react'

const Modal = (props) => {
    let { title, content, closeModal } = props
    
    return (<div className="rui-modal">
        <div className="rui-model-overlay" onClick={closeModal}></div>
        <div className="rui-modal-content">
            <h1>{title}</h1>
            <div className="rui-modal-text">{content}</div>
        </div>
    </div>)
}

export default Modal