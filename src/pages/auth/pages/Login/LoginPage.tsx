import "./LoginPage.scss";
import LoginNavComonent from "../../components/LoginNav/LoginNav";
import LoginFormComponent from "../../components/LoginForm/LoginForm";

const LoginPageComponent = () => {
  return (
    <div className={"login page"}>
      <LoginNavComonent />
      <LoginFormComponent />
    </div>
  );
};

export default LoginPageComponent;
