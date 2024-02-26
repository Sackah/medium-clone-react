import styles from "./Spinner.module.scss";

const Spinner = () => {
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
};

export default Spinner;
