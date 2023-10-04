
function ModelLongRangePrice({ handelSpeed, text, price, border }) {
    return (
        <div onClick={handelSpeed}>
            <div className="model-price-performance" style={{ border: { border } }}>
                <span className="span-left" >{text}</span>
                <span className="span-right" >{price}</span>
            </div>
        </div>
    )
}

export default ModelLongRangePrice
