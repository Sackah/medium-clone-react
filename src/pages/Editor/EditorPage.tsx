import HomeNavComponent from "../../shared/components/HomeNav/HomeNavComponent";
import EditorFormComponent from "./components/EditorForm/EditorForm";
import Footer from "../../shared/components/Footer/Footer";

export default function EditorPageComponent() {
    return (
        <div className="page">
            <HomeNavComponent />
            <EditorFormComponent />
            <Footer />
        </div>
    );
}
