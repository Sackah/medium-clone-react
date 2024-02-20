import "./Spinner.scss";

const Spinner = () => {
  return (
    <summary>
      <div className="lds-roller">
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
