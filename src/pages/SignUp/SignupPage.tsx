import LoginNavComponent from "../../shared/components/LoginNav/LoginNav";
import SignupFormComponent from "./components/SignupForm/SignupForm";
import Footer from "../../shared/components/Footer/Footer";

export default function SignupPageComponent() {
    return (
        <>
            <LoginNavComponent />
            <SignupFormComponent />
            <Footer />
        </>
    );
}
