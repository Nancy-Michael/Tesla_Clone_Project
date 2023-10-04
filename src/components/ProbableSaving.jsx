

function ProbableSaving({ handelPrice, background }) {
    return (

        <div>
            <button style={{ backgroundColor: background }}
                onClick={handelPrice}
                className="savings">Probable Savings*</button>
        </div>
    )
}

export default ProbableSaving
