import Nav from './Nav.js';
import logo from './images/little-lemon-logo.png'
import {Link} from 'react-router-dom';
function Header(){
    return(
        <header>
            <div className="nav-container">
                <div className="header-logo">
                    <Link to="/"><img src={logo} alt="little lemon logo" /></Link>
                </div>
                <>
                    <Nav/>
                </>
            </div>
        </header>
    )
}

export default Header;