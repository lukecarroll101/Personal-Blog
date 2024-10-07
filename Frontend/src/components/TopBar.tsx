import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface TopBarProps {
  text: string;
  to: string;
  title?: string;
}
// function TopBar({ text, to}: Props) {
// function ListGroup({ items, heading, onSelectItem }: Props) {
const TopBar: React.FC<TopBarProps> = ({
  text,
  to,
  title = "Luke's Website",
}) => {
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
      <nav className="navbar bg-primary fixed-top">
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            className="form-control mx-3"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <div className="centered-div">
          <h1 className=" text-white">{title}</h1>
        </div>
        <div className="right-icons navbar-text px-3 py-2">
          <span
            className="notification-icon mr-2 px-2 py-1"
            onClick={() => {
              console.log("notification");
            }}
          >
            🔔
          </span>
          <Link
            to={to}
            className="user-icon px-2 py-1"
            style={{ textDecoration: "none" }}
          >
            {text}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
