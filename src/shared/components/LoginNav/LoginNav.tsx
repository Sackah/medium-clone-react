import { NavLink } from "react-router-dom";
import navStyles from "../../stylesheets/nav.styles.module.scss";

const LoginNavComponent = () => {
  return (
    <div className={navStyles.navbar}>
      <nav>
        <div id={navStyles.logo}>conduit</div>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Sign In</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default LoginNavComponent;
