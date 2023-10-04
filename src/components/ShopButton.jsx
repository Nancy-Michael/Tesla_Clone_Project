import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function ShopButton() {
    return (
        <div>
            <Link to="/ShopList"><button
                className="header-menu-btn-desktop">Shop</button></Link>
            <div className='hidden-icon'>
                <FontAwesomeIcon icon={faArrowRight} className='icon' />
            </div>
        </div>
    )
}

export default ShopButton
