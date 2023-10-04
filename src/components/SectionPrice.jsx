import React from 'react'

function SectionPrice({ price, info }) {
    return (
        <div>
            <p><strong>{price}</strong><br />{info}</p>
        </div>
    )
}

export default SectionPrice
