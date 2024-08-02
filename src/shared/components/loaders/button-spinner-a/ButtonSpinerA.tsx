import styles from "./ButtonSpinnerA.module.scss";

export default function ButtonSpinerA() {
    return (
        <div className={styles["lds-ring"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
