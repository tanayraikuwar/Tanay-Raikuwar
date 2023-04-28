import "../styles/Ads.css";
import Welcome from "./Welcome";

let Ads = (props) => {
  return (
    <>
      {props.searchData === "welcome" ? (
        <Welcome />
      ) : (
        <div>
          <h1 className="text-center mt-4">Ads</h1>
          <div
            className="d-flex justify-content-center w-100"
            style={{ marginBottom: "50px" }}
          >
            <div className="grid-container mt-5">
              {/* Below code is of cards to show ads of respective company! */}
              {props.searchData.map((data, key) => (
                <div key={key} className="grid-items">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={`${data.imageUrl}`}
                      className="card-img-top"
                      alt={`${data.companyName.name}`}
                    />
                    <div className="card-body">
                      <h3 className="text-center text-info">
                        {data.companyName.name}
                      </h3>
                      <h5 className="card-title">{data.headline}</h5>
                      <p className="card-text">{data.primaryText}</p>
                      <a
                        href={`https://${data.companyName.url}`}
                        className="btn btn-outline-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {data.CTA}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ads;
