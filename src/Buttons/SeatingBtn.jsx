

function SeatingBtn({ num, handelSeats }) {
    return (
        <div>
            <button onClick={handelSeats}>{num}</button>
        </div>
    )
}

export default SeatingBtn
