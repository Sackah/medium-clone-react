import "./LoginPage.scss";
import LoginNavComponent from "../../shared/components/LoginNav/LoginNav";
import LoginFormComponent from "./components/LoginForm/LoginForm";
import Footer from "../../shared/components/Footer/Footer";

const LoginPageComponent = () => {
  return (
    <div className={"login page"}>
      <LoginNavComponent />
      <LoginFormComponent />
      <Footer />
    </div>
  );
};

export default LoginPageComponent;
