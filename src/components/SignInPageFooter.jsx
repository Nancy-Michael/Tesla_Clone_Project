import Contact from "./Contact"
import PricacyLegal from "./PricacyLegal"
import TeslaCopyRight from "./TeslaCopyRight"


function SignInPageFooter() {
    return (

        <div className="form-footer">
            <TeslaCopyRight />
            <PricacyLegal />
            <Contact />
        </div>
    )
}

export default SignInPageFooter
