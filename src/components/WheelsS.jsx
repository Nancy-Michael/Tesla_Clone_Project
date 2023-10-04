import { useState } from "react"
import WheelOption1 from "./WheelOption1"
import WheelOption2 from "./WheelOption2"




function WheelsS() {
    const [weels, setWeels] = useState("tempest");
    return (
        <div className="wheels-options">
            <h1 style={{ fontWeight: "400", marginBottom: "20px" }}>Wheels</h1>
            <div className="wheels">
                <WheelOption1 handelWeel={() => setWeels("tempest")} img="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELS/UI/ui_swat_whl_tempest.png" />
                <WheelOption2 handelWeel={() => setWeels('arachnid')} img="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELS/UI/21Arachnid.png" />
            </div>

            {weels === "tempest" && <div style={{ textAlign: "center" }}>
                <h5 style={{ fontWeight: "normal", fontSize: "20px", marginBottom: "10px" }}>19" Tempest Wheels Included</h5>
                <p style={{ marginBottom: "10px", opacity: ".65" }}>All-Season Tires</p>
                <p style={{ opacity: "0.65" }}>Range (EPA est.) : 405mi</p>
            </div>}
            {weels === "arachnid" && <div style={{ textAlign: "center" }}>
                <h5 style={{ fontWeight: "normal", fontSize: "20px", marginBottom: "10px" }}>21" Arachnid Wheels $4,500</h5>
                <p style={{ marginBottom: "10px", opacity: ".65" }}>All-Season Tires</p>
                <p style={{ opacity: "0.65" }}>Range (est.) : 375mi</p>
            </div>}
            <button className="order-wheels-learn-more">Learn More</button>
        </div>
    )
}

export default WheelsS
