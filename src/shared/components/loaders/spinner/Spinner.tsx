import styles from "./Spinner.module.scss";

export default function Spinner() {
    return (
        <summary>
            <div className={styles["lds-roller"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </summary>
    );
}
