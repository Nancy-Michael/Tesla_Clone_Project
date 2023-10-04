

function TopHeader({ taxPrice, text1, text2 }) {
    return (
        <header className="top-header">
            <div className="top-header-text">
                <div className="fedral-tax">
                    <strong style={{ color: "white" }}
                        className="f-tax">{taxPrice}</strong>
                    <span>{text1}</span>
                </div>
                <div className="fedral-tax-description">
                    <p style={{ color: "white" }}>{text2}</p>
                </div>
                <a >See Details</a>

            </div>
        </header>
    )
}

export default TopHeader
