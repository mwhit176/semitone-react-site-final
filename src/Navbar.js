import { Link } from "react-router-dom";
import "./styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/semitone-react-site-final">
          <img className="home-icon" src={ require('./imgs/home.png') } alt="home-icon" />
          HOME
        </Link>
        <Link to="/Shop">SHOP</Link>
        <Link to="/Rentals">RENTALS</Link>
        <Link to="/Repairs">REPAIRS</Link>
        <Link to="/Book">BOOK</Link>
        <Link to="/About">
          ABOUT
          <img className="info-icon" src={ require('./imgs/info.png') } alt="info-icon" />
        </Link>
      </div>
    </nav>
  );
}
 
export default Navbar;