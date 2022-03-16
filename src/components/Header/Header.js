import React from "react";
import URLHelper from "../../helpers/URLHelper";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  // TODO -- use forward ref here
  const NavLink = ({ children, path, ...other }) => {
    const currentPathname = URLHelper.pathname;
    const selected = path === currentPathname;
    return (
      <Link
        to={path}
        className={`nav-link link ${selected && "selected"}`}
        {...other}
      >
        {children}
      </Link>
    );
  };
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src="assets/Playlist-Creator_logo.png" alt="logo" height="30px" />
      </Link>
      <nav className="nav-links">
        <NavLink path="/my_music">My Music</NavLink>
        <NavLink path="/spotify">Search Spotify</NavLink>
        <a href="https://www.github.com/theflexone" className="link">
          My GitHub Page
        </a>
      </nav>
    </header>
  );
};

export default Header;
