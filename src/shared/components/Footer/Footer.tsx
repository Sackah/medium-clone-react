import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <NavLink to={"/"} className={styles.logo}>
                conduit
            </NavLink>
            An interactive learning project from{" "}
            <a href="https://www.thinkster.io">Thinkster.</a>
            Code & design licensed under MIT.
        </footer>
    );
}
