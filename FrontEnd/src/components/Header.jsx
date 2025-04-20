import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; 

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="v.png" alt="TechnoFy Logo" className="logo-img" />
        </Link>
      </div>

      <nav className="navbar">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Help</a>
        <a href="#"><FaUser /></a>
      </nav>
    </header>
  );
}

export default Header;
