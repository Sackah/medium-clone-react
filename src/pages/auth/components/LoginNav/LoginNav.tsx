import {NavLink} from 'react-router-dom';
import './LoginNav.scss';
import '../../../../variables.scss';
const LoginNavComponent = () => {

    return(
        <div className={"navbar"}>
            <nav>
                <div id={"logo"}>conduit</div>
                <ul>
                    <li><NavLink to={'/home'}>Home</NavLink></li>
                    <li><NavLink to={'/login'}>Sign In</NavLink></li>
                    <li><NavLink to={'/register'}>Sign Up</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}
export default LoginNavComponent;
