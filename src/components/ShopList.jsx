import Apparel from "./Apparel"
import Header from "./Header"
import HomeCharging from "./HomeCharging"
import LifeStyle from "./LifeStyle"
import VehiclAccessories from "./VehiclAccessories"


function ShopList() {
    return (
        <div>
            <Header />
            <div className="shop-list">
                <HomeCharging title="Charging" />
                <VehiclAccessories />
                <Apparel />
                <LifeStyle />
            </div>
        </div>
    )
}

export default ShopList
