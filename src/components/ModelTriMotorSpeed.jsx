

function ModelTriMotorSpeed({ range, top, sec }) {
    return (
        <div className="speed">
            <div className="range-speed">
                <h3>{range}<sub>mi</sub></h3>
                <p>Range (EPA <br />est.)</p>
            </div>
            <div className="top-speed">
                <h3>{top}<sub>mph</sub></h3>
                <p>Top Speed</p>
            </div>
            <div className="s-speed">
                <h3>{sec}<sub>sec</sub></h3>
                <p>0-60 mph</p>
            </div>
        </div>
    )
}

export default ModelTriMotorSpeed
