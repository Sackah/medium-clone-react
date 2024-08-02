import LoginNavComponent from "../../shared/components/LoginNav/LoginNav";
import LoginFormComponent from "./components/LoginForm/LoginForm";
import Footer from "../../shared/components/Footer/Footer";

export default function LoginPageComponent() {
    return (
        <>
            <LoginNavComponent />
            <LoginFormComponent />
            <Footer />
        </>
    );
}
