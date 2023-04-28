import "../styles/Spinner.css";

let Spinner = () => {
  return (
    <>
      <div className="spinnerParent">
        <div className="spinnerChild">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
