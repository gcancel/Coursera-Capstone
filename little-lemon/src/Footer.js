import logo from './images/little-lemon-logo.png'

function Footer(){
    return(
    <footer class="footer-container">
        <a href="index.html"><img src={logo} alt="Little Lemon Logo"/></a>
        <section class="footer-menus">
            <section class="main-menu">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </section>
            <section class="contact-menu">
                <ul>
                    <li><a href="#">Address</a></li>
                    <li><a href="#">phone number</a></li>
                    <li><a href="#">email</a></li>
                </ul>
            </section>
            <section class="contact-menu2">
                <ul>
                    <li><a href="#">Address</a></li>
                    <li><a href="#">phone number</a></li>
                    <li><a href="#">email</a></li>
                </ul>
            </section>
        </section>
    </footer>
    )
}

export default Footer;