import Spinner from "../spinner/Spinner";
import styles from "./LoadingPage.module.scss";

const LoadingPage = () => {
  return (
    <section className={styles.section}>
      <Spinner />
    </section>
  );
};

export default LoadingPage;
