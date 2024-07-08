import { Link } from "react-router-dom"
import './SignIn.css'
import SignInCard from "../../Componenets/SignInCard/SignInCard";

function SignIn() {
    return (
        <>
            <div className="header-wrapper">
                <header>
                    <Link className="signUp" to="/SignUp">Sign Up</Link>
                </header>
            </div>
            <div className="content">
                <div className="content-left">
                    <SignInCard/>
                </div>
                <div className="content-right">
                    <h1>Zenko</h1>
                    <h2>Ready to start saving smart through financial insights?</h2>
                </div>
            </div>
        </>
    )
}

export default SignIn;