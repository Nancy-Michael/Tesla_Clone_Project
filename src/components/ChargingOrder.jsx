
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'


function ChargingOrder({ price1, price2 }) {
    return (
        <div>
            <div className="charging-order">
                <h1>Charging</h1>
                <p> <span style={{ marginRight: "8px" }}><FontAwesomeIcon icon={faCircleExclamation} /></span>  Home charging equipment is not included</p>
                <div className="charging-option">
                    <div>
                        <input type="checkbox" id="checkbox-wall" className="checkbox" />
                        <label htmlFor="checkbox-wall">Wall Connector</label>
                    </div>
                    <span>{price1}</span>
                </div>
                <div className="charging-option" >
                    <div>
                        <input type="checkbox" id="checkbox-mobil" className="checkbox" />
                        <label htmlFor="checkbox-mobil">Mobile Connector</label>
                    </div>
                    <span>{price2}</span>
                </div>
                <button>Learn More</button>
            </div>

        </div>

    )
}

export default ChargingOrder
