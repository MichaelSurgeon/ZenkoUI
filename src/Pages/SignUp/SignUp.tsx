import { Link } from "react-router-dom"
import './SignUp.css'
import SignUpCard from "../../Componenets/SignUpCard/SignUpCard";

function SignUp() {
    return (
        <>
            <div className="header-wrapper">
                <header>
                    <Link className="signIn" to="/SignIn">Sign In</Link>
                </header>
            </div>
            <div className="content">
                <div className="content-left-sign-up">
                    <SignUpCard/>
                </div>
                <div className="content-right-signup">
                    <h1 className="content-right-heading">Zenko</h1>
                    <h2 className="content-right-text">Gain control of your spending through financial insights.</h2>
                </div>
            </div>
        </>
    )
}

export default SignUp;