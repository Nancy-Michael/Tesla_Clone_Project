import WheelOption1 from "./WheelOption1"
import WheelOption2 from "./WheelOption2"
import { useState } from "react";

function Wheels3() {
    const [weels, setWeels] = useState("Aero");
    return (
        <div className="wheels-options">
            <h1 style={{ fontWeight: "400", marginBottom: "20px" }}>Wheels</h1>
            <div className="wheels">
                <WheelOption1 handelWeel={() => setWeels("Aero")} img="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/option-wheels-18-aero.png" />
                <WheelOption2 handelWeel={() => setWeels("sport")} img="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/option-wheels-19-sport.png" />
            </div>
            {weels === "Aero" && <div style={{ textAlign: "center" }}>
                <h5 style={{ fontWeight: "normal", fontSize: "20px", marginBottom: "10px" }}>18" Aero Wheels Included</h5>
                <p style={{ marginBottom: "10px", opacity: ".65" }}>All-Season Tires</p>
                <p style={{ opacity: "0.65" }}>Range (EPA est.) : 272mi</p>

            </div>}
            {weels === "sport" && <div style={{ textAlign: "center" }}>
                <h5 style={{ fontWeight: "normal", fontSize: "20px", marginBottom: "10px" }}>19" Sport Wheels $1,500</h5>
                <p style={{ marginBottom: "10px", opacity: ".65" }}>All-Season Tires</p>
                <p style={{ opacity: "0.65" }}>Range (est.) : 267mi</p>
                <p style={{ opacity: "0.65" }}>Top Speed : 155mph</p>
            </div>}
            <button className="order-wheels-learn-more">Learn More</button>
        </div>
    )
}

export default Wheels3
