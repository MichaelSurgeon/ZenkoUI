import { Link } from 'react-router-dom';
import './SignOut.css'

function SignOut() {
    return (
        <>
             <div className="header-wrapper">
                <header>
                    <Link className="signIn" to="/SignIn">Sign In</Link>
                </header>
            </div>
            <div className="sign-out-wrapper">
                <div className='sign-out-content'>
                    <div className='signout-header'>
                        <h1>Zenko</h1>
                    </div>
                    <div className='signout-content'>
                        <h2>See you again soon!</h2>
                    </div>
                    <Link className="signIn-button" to="/SignIn">Sign In</Link>
                </div>
            </div>
        </>
    )
}

export default SignOut;