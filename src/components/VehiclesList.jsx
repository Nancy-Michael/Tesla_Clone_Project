import Header from "./Header"
import ModelS from "./ModelS"
import Model3 from "./Model3"
import ModelX from "./ModelX"
import ModelY from "./ModelY"
function VehiclesList() {
    return (
        <div>
            <Header />
            <div className="vehicles-list">
                <ModelS />
                <Model3 />
                <ModelX />
                <ModelY />
                <div className="side-menu">
                    <a href="">Inventory</a>
                    <a href="">Used Cars</a>
                    <a href="">Demo Drive</a>
                    <a href="">Trade-in</a>
                    <a href="">Help Me Choose</a>
                    <a href="">Compare</a>
                    <a href="">Fleet</a>
                    <a href="">Cybertruck</a>
                    <a href="">Semi</a>
                    <a href="">Roadster</a>
                </div>
            </div>
        </div>
    )
}

export default VehiclesList
