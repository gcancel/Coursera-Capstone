import {Link} from 'react-router-dom';

function Nav(){

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
    return(
        <nav>
            <ul>
                <li><Link to="/" onClick={handleClick("hero")}>Home</Link></li>
                <li><Link to="/" onClick={handleClick("about")}>About</Link></li>
                <li><a href="#">Menu</a></li>
                <li><Link to="/BookingPage">Reservations</Link></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>

    )
}

export default Nav;