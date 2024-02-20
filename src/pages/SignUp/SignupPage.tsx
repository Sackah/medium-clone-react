import LoginNavComponent from "../../shared/components/LoginNav/LoginNav";
import SignupFormComponent from "./components/SignupForm/SignupForm";
import Footer from "../../shared/components/Footer/Footer";
import "./SignupPage.scss";

const SignupPageComponent = () => {
  return (
    <div className={"signup page"}>
      <LoginNavComponent />
      <SignupFormComponent />
      <Footer />
    </div>
  );
};

export default SignupPageComponent;
