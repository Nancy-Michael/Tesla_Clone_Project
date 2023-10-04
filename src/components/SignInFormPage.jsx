import { Link } from "react-router-dom"
import Logo from "./Logo"
import SignInPageFooter from "./SignInPageFooter"
import { useState } from "react"

function SignInFormPage() {
    const [signInEmail, setSignInEmail] = useState("");
    const updateInput = (e) => {
        setSignInEmail(e.target.value)
    }
    return (
        <div className="form-page">
            <Link to="/"><Logo /></Link>
            <div className="sign-in-form">
                <h1>Sign In</h1>
                <form className="form">
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email"
                            value={signInEmail}
                            onChange={updateInput} />
                        <button className="next-btn">Next</button>
                        <p className="trouble"><a href="" >Trouble Signing In?</a></p>
                        <div>
                            <p>Or</p>
                            <button className="create">Create Account</button>
                        </div>
                    </div>
                </form>
                <SignInPageFooter />
            </div>
        </div>
    )
}

export default SignInFormPage
