import LoginNavComponent from "../../shared/components/LoginNav/LoginNav";
import SignupFormComponent from "./components/SignupForm/SignupForm";
import Footer from "../../shared/components/Footer/Footer";

const SignupPageComponent = () => {
  return (
    <>
      <LoginNavComponent />
      <SignupFormComponent />
      <Footer />
    </>
  );
};

export default SignupPageComponent;
