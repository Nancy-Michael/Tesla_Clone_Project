

function BlackColorBtn({ handelColor, border, radius }) {
    return (
        <div>
            <button style={{ border: border, borderRadius: radius }}
                onClick={handelColor}>
                <img src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Black.png" alt="" />
            </button>

        </div>
    )
}

export default BlackColorBtn
