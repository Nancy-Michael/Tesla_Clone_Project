import Charging from "./Charging"
import Header from "./Header"
import HomeCharging from "./HomeCharging"
import SuperCharging from "./SuperCharging"

function ChargingList() {
    return (
        <div>
            <Header />
            <div className="charging-list">
                <Charging />
                <HomeCharging a="Learn" A='Shop' title="Home Charging" />
                <SuperCharging />
                <div className="side-menu">
                    <a href="">Charging Calculator</a>
                    <a href="">Trip Planner</a>
                    <a href="">Supercharger Voting</a>
                    <a href="">Host a Supercharger</a>
                    <a href="">Commercial Charging</a>
                    <a href="">Hos Wall Connectors</a>
                </div>
            </div>
        </div>
    )
}

export default ChargingList
