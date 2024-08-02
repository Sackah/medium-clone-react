import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import navStyles from "../../stylesheets/nav.styles.module.scss";

export default function HomeNavComponent() {
    const { data } = useSelector((state: RootState) => state.user);
    const user = data;

    return (
        <div className={navStyles.navbar}>
            <nav>
                <div id={navStyles.logo}>conduit</div>
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
                            <div className={navStyles.img}>
                                <img src={user?.image} alt="" />
                            </div>
                            Profile
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
