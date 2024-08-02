import HomeNavComponent from "../../shared/components/HomeNav/HomeNavComponent";
import SettingsFormComponent from "./components/SettingsForm/SettingsForm";
import Footer from "../../shared/components/Footer/Footer";
import styles from "./SettingsPage.module.scss";

const SettingsPageComponent = () => {
  return (
    <section className="page">
      <HomeNavComponent />
      <SettingsFormComponent />
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </section>
  );
};

export default SettingsPageComponent;
