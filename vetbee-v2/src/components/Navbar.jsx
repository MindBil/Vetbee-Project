import "./Navbar.scss"
// import { Link } from "react-router-dom";
// import { topNavigationItems } from "../routes/routes";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="https://millroadvet.co.nz/portals/57/gb2.png" alt="Logo" />
        </div>
        <div className="navbar-links">
          <h1>VETBEE</h1>
          <a href="/pets">Pets</a>
          <a href="/medications">Medications</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;