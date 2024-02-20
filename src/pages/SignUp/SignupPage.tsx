import LoginNavComponent from "../../shared/components/LoginNav/LoginNav";
import SignupFormComponent from "./components/SignupForm/SignupForm";
import "./SignupPage.scss";

const SignupPageComponent = () => {
  return (
    <div className={"signup page"}>
      <LoginNavComponent />
      <SignupFormComponent />
    </div>
  );
};

export default SignupPageComponent;
