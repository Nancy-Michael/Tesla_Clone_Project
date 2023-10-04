import FeatureDetails from "./FeatureDetails"


function EnhancedAutopilot() {
    return (
        <div className="autopilot">
            <div>
                <h1 style={{ fontWeight: "400" }}>Enhanced Autopilot</h1>
                <h4>$6,000</h4>
                <ul>
                    <li>Navigate on Autopilot</li>
                    <li>Auto Lane Change</li>
                    <li>Autopark</li>
                    <li>Summon</li>
                    <li>Smart Summon</li>
                </ul>
                <div className="autopilot-btns">
                    <button className="auto-add-btn">Add</button>
                    <FeatureDetails />
                </div>
            </div>
            <div className="full-self-driving">
                <h1 style={{ fontWeight: "400", padding: "8px" }}>Full Self-Driving Capability</h1>
                <h4>$12,000</h4>
                <p >Your car will be able to drive itself almost anywhere with minimal driver intervention and will continuously improve</p>
                <ul>
                    <li>All functionality of Basic Autopilot and Enhanced Autopilot</li>
                    <li>Autosteer on city streets</li>
                    <li>Trafic Light and Stop Sign Control</li>
                </ul>
                <p>The currently enabled features require active driver supervision
                    and do not make the vehicle autonomous. The activation and use of
                    these features are dependent on achieving reliability far in excess
                    of human drivers as demonstrated by billions of miles of experience, as well as regulatory approval, which may take longer in some jurisdictions. As these self-driving features evolve, your car will
                    be continuously upgraded through over-the-air software updates.
                </p>
                <div className="autopilot-btns">
                    <button className="auto-add-btn">Add</button>
                    <FeatureDetails />
                </div>
            </div>
        </div>
    )
}

export default EnhancedAutopilot
