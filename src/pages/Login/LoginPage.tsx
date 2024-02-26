import LoginNavComponent from "../../shared/components/LoginNav/LoginNav";
import LoginFormComponent from "./components/LoginForm/LoginForm";
import Footer from "../../shared/components/Footer/Footer";
import styles from "./LoginPage.module.scss";

const LoginPageComponent = () => {
  return (
    <div className={`${styles.login} ${styles.page}`}>
      <LoginNavComponent />
      <LoginFormComponent />
      <Footer />
    </div>
  );
};

export default LoginPageComponent;
