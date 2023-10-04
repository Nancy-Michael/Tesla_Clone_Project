import { useState } from "react"


function PurchasePrice({ handelPrice, background }) {
    return (
        <div>
            <button
                style={{ backgroundColor: background }}
                onClick={handelPrice}
                className="purchase">Purchase Price</button>
        </div>
    )
}

export default PurchasePrice
