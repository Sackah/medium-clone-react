import HomeNavComponent from "../../shared/components/HomeNav/HomeNavComponent";
import SettingsFormComponent from "./components/SettingsForm/SettingsForm";
import Footer from "../../shared/components/Footer/Footer";

const SettingsPageComponent = () => {
  return (
    <section className="page">
      <HomeNavComponent />
      <SettingsFormComponent />
      <Footer />
    </section>
  );
};

export default SettingsPageComponent;
