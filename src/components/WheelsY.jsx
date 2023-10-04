import WheelOption1 from "./WheelOption1"


function WheelsY() {
    return (
        <div className="wheels-options">
            <h1 style={{ fontWeight: "400", marginBottom: "20px" }}>Wheels</h1>
            <div className="wheels">
                <WheelOption1 img="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELY/UI/uberturbine_wheels.png" />
            </div>
            <div style={{ textAlign: "center" }}>
                <h5 style={{ fontWeight: "normal", fontSize: "20px", marginBottom: "10px" }}>21'' Uberturbine Wheels Included</h5>
                <p style={{ marginBottom: "10px", opacity: ".65" }}>All-Season Tires</p>
                <p style={{ opacity: "0.65" }}>Range (EPA est.) : 303mi</p>
            </div>
            <button className="order-wheels-learn-more">Learn More</button>
        </div>
    )
}

export default WheelsY
