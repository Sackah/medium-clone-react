import "./LoginPage.scss";
import LoginNavComponent from "../../shared/components/LoginNav/LoginNav";
import LoginFormComponent from "./components/LoginForm/LoginForm";

const LoginPageComponent = () => {
  return (
    <div className={"login page"}>
      <LoginNavComponent />
      <LoginFormComponent />
    </div>
  );
};

export default LoginPageComponent;
