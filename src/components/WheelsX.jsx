import { useState } from "react"
import WheelOption1 from "./WheelOption1"
import WheelOption2 from "./WheelOption2"


function WheelsX() {
    const [weels, setWeels] = useState("cyberstream");
    return (
        <div className="wheels-options">
            <h1 style={{ fontWeight: "400", marginBottom: "20px" }}>Wheels</h1>
            <div className="wheels">
                <WheelOption1 handelWeel={() => setWeels("cyberstream")} img="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELX/UI/20Cyberstream.png" />
                <WheelOption2 handelWeel={() => setWeels('turbin')} img="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELX/UI/22Turbine.png" />
            </div>

            {weels === "cyberstream" && <div style={{ textAlign: "center" }}>
                <h5 style={{ fontWeight: "normal", fontSize: "20px", marginBottom: "10px" }}>20'' Cyberstream Wheels Included</h5>
                <p style={{ marginBottom: "10px", opacity: ".65" }}>All-Season Tires</p>
                <p style={{ opacity: "0.65" }}>Range (EPA est.) : 348mi</p>
                <p style={{ opacity: "0.65" }}>Top Speed : 149mph</p>
            </div>}
            {weels === "turbin" && <div style={{ textAlign: "center" }}>
                <h5 style={{ fontWeight: "normal", fontSize: "20px", marginBottom: "10px" }}>22" Turbin Wheels $5,500</h5>
                <p style={{ marginBottom: "10px", opacity: ".65" }}>All-Season Tires</p>
                <p style={{ opacity: "0.65" }}>Range (est.) : 330mi</p>
                <p style={{ opacity: "0.65" }}>Top Speed : 155mph</p>
            </div>}
            <button className="order-wheels-learn-more">Learn More</button>
        </div>
    )
}

export default WheelsX
