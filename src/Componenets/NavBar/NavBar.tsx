import { Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {

    function removeLocalStorage() {
        localStorage.removeItem("UserId");
    }

    return (
        <nav className="navbar">
            <ul>
                <li className="nav-item-logo"><Link to="/home">Zenko</Link></li>
                <li className="nav-item"><Link to="/Categories">Categories</Link></li>
                <li className="nav-item"><Link to="/DataUpload">Data upload</Link></li>
                <li className="nav-item"><Link to="/Account">Account</Link></li>
                <li className="nav-item-signout"><Link to="/SignOut" onClick={removeLocalStorage}>Sign Out</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;