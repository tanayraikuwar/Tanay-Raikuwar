let Welcome = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center w-100 mt-5"
        style={{ height: "60vh" }}
      >
        <div className="card w-50">
          <div className="card-header text-center">
            <h3>Welcome</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              This is a MERN Stack application to see ads.
            </h5>
            <p className="card-text">
              To see ads please search some keywords in the search bar!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Welcome;
