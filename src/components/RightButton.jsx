import { Link } from "react-router-dom"

function RightButton({ rightText }) {
    return <Link to="/DemoDrivePage"><button
        className="right-btn">{rightText}</button></Link>

}

export default RightButton
