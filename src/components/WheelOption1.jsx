

function WheelOption1({ img, handelWeel }) {
    return (
        <div>
            <button onClick={handelWeel}><img src={img} alt="" /></button>
        </div>
    )
}

export default WheelOption1
