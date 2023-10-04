import { Link } from "react-router-dom"
function Logo() {
    return (
        <div className="logo">
            <Link to="/">
                <img src="/images/logo.svg"></img>
            </Link>
        </div>
    )
}

export default Logo
