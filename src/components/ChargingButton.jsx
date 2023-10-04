import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function ChargingButton() {
    return (
        <div className="menu-panel-items">
            <Link to="/ChargingList"><button
                className="header-menu-btn-desktop">Charging</button></Link>
            <div className='hidden-icon'>
                <FontAwesomeIcon icon={faArrowRight} className='icon' />
            </div>
        </div>
    )
}

export default ChargingButton
