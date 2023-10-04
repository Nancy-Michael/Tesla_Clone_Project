import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function HeaderAccountIcon() {
    return (
        <div>
            <Link to="/SignInFormPage"><FontAwesomeIcon icon={faCircleUser} className='icon' /></Link>
        </div>
    )
}

export default HeaderAccountIcon
