import Spinner from "../spinner/Spinner";
import styles from "./LoadingPage.module.scss";

export default function LoadingPage() {
    return (
        <section className={styles.section}>
            <Spinner />
        </section>
    );
}
