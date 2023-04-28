import { NavLink } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

let Navbar = (props) => {
  let [searchParams, setSearchParams] = useState("");

  let fetchData = () => {
    fetch(`http://localhost:3000/data/${searchParams}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        props.setSearchData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(searchData);

  return (
    <>
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand text-light">
            ShowAds
          </NavLink>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="d-flex"
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="searchParams"
              onChange={(e) => setSearchParams(e.target.value)}
            />
            <button
              className="btn btn-outline-light"
              type="button"
              onClick={() => {
                if (searchParams === "") {
                  alert("Please Search Something");
                  return;
                }
                props.setSearchData("spinner");
                fetchData();
              }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
