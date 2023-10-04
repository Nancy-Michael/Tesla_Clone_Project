
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


function SubmitOrder({ model, date, qualification }) {
    return (
        <div className="submit-order">
            <div>
                <h1>Order Your {model}</h1>
                <h4 >{date}</h4>
                <p><span style={{ marginRight: "8px" }}><FontAwesomeIcon icon={faCheck} /></span> {qualification}</p>
                <a href="">See Details</a>
            </div>

            <button>Continue</button>
        </div>
    )
}

export default SubmitOrder
