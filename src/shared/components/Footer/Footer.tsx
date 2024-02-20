import { NavLink } from "react-router-dom";
import './Footer.scss';


const Footer = () => {
    return (
        <footer>
            <NavLink to={'/'} className={"logo"}>conduit</NavLink>
            An interactive learning project from <a href="https://www.thinkster.io">Thinkster.</a>
            Code & design licensed under MIT.
        </footer>
    )
}

export default Footer;