
import ChargingButton from "./ChargingButton"
import DiscoverButton from "./DiscoverButton"
import EnergyButton from "./EnergyButton"
import ShopButton from "./ShopButton"
import VehiclesButton from "./VehiclesButton"



function HeaderMenue() {
    return (
        <div className="header-menu-tesktop hidden-mobile-size">
            <VehiclesButton />
            <EnergyButton />
            <ChargingButton />
            <DiscoverButton />
            <ShopButton />
        </div>
    )
}

export default HeaderMenue
