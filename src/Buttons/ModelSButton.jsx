import React from 'react'

function ModelSButton({ text, showImg }) {
    return (
        <div>
            <button className="demo-drive-selctor-btn" onClick={showImg}>{text}</button>
        </div>
    )
}

export default ModelSButton
