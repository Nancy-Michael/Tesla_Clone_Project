
import Header from "./Header"
import MegaPack from "./MegaPack"
import SolarPanels from "./SolarPanels"
import SolarRoof from "./SolarRoof"

function EnergyList() {
    return (
        <div>
            <Header />
            <div className="energy-list">
                <MegaPack />
                <SolarPanels />
                <SolarRoof />
                <div className="side-menu">
                    <a href="">Scheldule a Consultation</a>
                    <a href="">Incentives</a>
                    <a href="">Support</a>
                    <a href="">Partner with Tesla</a>
                    <a href="">Commercial</a>
                    <a href="">Utilites</a>
                </div>
            </div>
        </div>
    )
}

export default EnergyList
