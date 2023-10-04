

function ModelPriceStantard({ titel, text, price, handelSpeed, handelPriceDescription }) {
    return (
        <div >
            <h2 style={{ fontWeight: "400", textAlign: "start" }}>{titel}</h2>
            <div onClick={handelSpeed} className="model-price-stantard">
                <span className="span-left" >{text}</span>
                <span className="span-right" >{price}</span>
            </div>
        </div >
    )
}

export default ModelPriceStantard
