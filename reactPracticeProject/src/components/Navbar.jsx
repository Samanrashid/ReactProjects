import PropTypes from "prop-types";
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid ">
          <a className="navbar-brand text-warning" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Location
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="btn btn-large btn-outline-warning text-warning"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
Navbar.propTypes = {
  title: PropTypes.string,
};
