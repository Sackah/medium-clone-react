import HomeNavComponent from "../../shared/components/HomeNav/HomeNavComponent";
import EditorFormComponent from "./components/EditorForm/EditorForm";
import Footer from "../../shared/components/Footer/Footer";

const EditorPageComponent = () => {
  return (
    <div className="page">
      <HomeNavComponent />
      <EditorFormComponent />
      <Footer />
    </div>
  );
};

export default EditorPageComponent;
