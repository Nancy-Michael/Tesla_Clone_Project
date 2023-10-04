import { useScroll } from "react-spring"
import SteeringWheelBtn from "../Buttons/SteeringWheelBtn"
import YoukSteeringBtn from "../Buttons/YoukSteeringBtn"
import { useState } from "react"

function SteeringControl() {
    const [steeringWheel, setSteeringWheel] = useState("steering");
    return (
        <div className="steering-control">
            <h1 style={{ fontWeight: "400" }}>Stering Control</h1>
            <div className="steering-control-btns">
                <SteeringWheelBtn />
                <YoukSteeringBtn />
            </div>
            <div className=".steering-control-text">
                <p><span style={{ fontWeight: "500" }}>Steering Wheel</span>
                    <span style={{ opacity: "0.9" }}>Included</span></p>
            </div>
        </div>
    )
}

export default SteeringControl
