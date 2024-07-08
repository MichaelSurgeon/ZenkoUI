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
                <div className="content-left">
                    <SignUpCard/>
                </div>
                <div className="content-right">
                    <h1>Zenko</h1>
                    <h2>Gain control of your spending through financial insights.</h2>
                </div>
            </div>
        </>
    )
}

export default SignUp;