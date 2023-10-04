

function ModelPriceTri({ titel, text, price, handelSpeed }) {
    return (
        <div onClick={handelSpeed}>
            <h2 style={{ fontWeight: "400", alignItems: "start" }}>{titel}</h2>
            <div className="model-price-tri">
                <span className="span-left">{text}</span>
                <span className="span-right">{price}</span>
            </div>
        </div>
    )
}

export default ModelPriceTri
