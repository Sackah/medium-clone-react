import LoginNavComponent from "../../shared/components/LoginNav/LoginNav";
import LoginFormComponent from "./components/LoginForm/LoginForm";
import Footer from "../../shared/components/Footer/Footer";

const LoginPageComponent = () => {
  return (
    <>
      <LoginNavComponent />
      <LoginFormComponent />
      <Footer />
    </>
  );
};

export default LoginPageComponent;
