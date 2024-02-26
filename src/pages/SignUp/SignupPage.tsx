import LoginNavComponent from "../../shared/components/LoginNav/LoginNav";
import SignupFormComponent from "./components/SignupForm/SignupForm";
import Footer from "../../shared/components/Footer/Footer";
import styles from "./SignupPage.module.scss";

const SignupPageComponent = () => {
  return (
    <div className={`${styles.signup} ${styles.page}`}>
      <LoginNavComponent />
      <SignupFormComponent />
      <Footer />
    </div>
  );
};

export default SignupPageComponent;
