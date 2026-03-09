import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="logo">Dwanda Pennants</h2>

      <ul className="nav-links">
        <li>
          <Link 
            to="/" 
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
        </li>

        <li>
          <Link 
            to="/project" 
            className={location.pathname === "/project" ? "active" : ""}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link 
            to="/Contact"
            className={location.pathname === "/Contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
