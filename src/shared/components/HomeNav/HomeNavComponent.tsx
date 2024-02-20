import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import "../../stylesheets/nav.styles.scss";

const HomeNavComponent = () => {
  const { data } = useSelector((state: RootState) => state.user);
  const user = data;

  return (
    <div className="navbar">
      <nav>
        <div id="logo">conduit</div>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/editor"}>New Article</NavLink>
          </li>
          <li>
            <NavLink to={"/settings"}>Settings</NavLink>
          </li>
          <li>
            <NavLink to={`/profile/${user?.username}`}>
              <div className="img">
                <img src={user?.image} alt="" />
              </div>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomeNavComponent;
