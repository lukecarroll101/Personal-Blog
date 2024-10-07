import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  colour?: string;
}

// align-items-center
const NavbarMinTrans: React.FC<Props> = ({ colour }) => {
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
      <nav className="navbar navbar-expand-md fixed-top py-4">
        <a
          className="navbar-brand custom-margin-left"
          href="/"
          style={{ color: colour }}
        >
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
              <a className="nav-link" href="/" style={{ color: colour }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link" style={{ color: colour }}>
                |
              </span>
            </li>
            <li className="nav-item offset-on-hover">
              <a className="nav-link" href="/japan" style={{ color: colour }}>
                Japan
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link" style={{ color: colour }}>
                |
              </span>
            </li>
            <li className="nav-item offset-on-hover">
              <a className="nav-link" href="/test" style={{ color: colour }}>
                Blog Posts
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link" style={{ color: colour }}>
                |
              </span>
            </li>
            <form onSubmit={handleSearch} className="form-inline custom-margin">
              <input
                className="form-control border-0"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ backgroundColor: "transparent" }}
              ></input>{" "}
            </form>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarMinTrans;
