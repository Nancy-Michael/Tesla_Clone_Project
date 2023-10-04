import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function DiscoverButton() {
    return (
        <div className="menu-panel-items">
            <Link to="/DiscoverList"><button
                className="header-menu-btn-desktop">Discover</button></Link>
            <div className='hidden-icon'>
                <FontAwesomeIcon icon={faArrowRight} className='icon' />
            </div>
        </div>
    )
}

export default DiscoverButton
