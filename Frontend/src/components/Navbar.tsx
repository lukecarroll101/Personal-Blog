import { useState } from "react";
import { useNavigate } from "react-router-dom";

// align-items-center
const NavbarMin: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lowercaseSearchQuery = searchQuery.toLowerCase();
    // Navigate to the search page with the search query
    navigate(`/${lowercaseSearchQuery}`);
    setSearchQuery(""); // Clear the search input
  };

  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top shadow py-4 bg-white ">
        <a className="navbar-brand custom-margin-left" href="/">
          Luke Carroll
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end align-center with-shadow"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-3">
            <li className="nav-item offset-on-hover">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link">|</span>
            </li>
            <li className="nav-item offset-on-hover">
              <a className="nav-link" href="/japan">
                Japan
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link">|</span>
            </li>
            <li className="nav-item offset-on-hover">
              <a className="nav-link" href="/test">
                Blog Posts
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link">|</span>
            </li>
            <form onSubmit={handleSearch} className="form-inline custom-margin">
              <input
                className="form-control border-0"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              ></input>{" "}
            </form>
          </ul>
        </div>
      </nav>
      <div style={{ paddingTop: "90px" }}></div>
    </>
  );
};

export default NavbarMin;
