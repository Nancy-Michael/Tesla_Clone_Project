

function ModelPricePerformance({ text, price, handelSpeed }) {
    return (
        <div>
            <div onClick={handelSpeed} className="model-price-performance">
                <span className="span-left" >{text}</span>
                <span className="span-right" >{price}</span>
            </div>
        </div>
    )
}

export default ModelPricePerformance
