import { Link } from "react-router-dom";
import "./styles/bottombar.css"

const Bottombar = () => {
  return (
      <div className="bottombar">
        <img className="bottombar-logo" src={ require('./imgs/strat.jpg') } alt="logo" />
        <div className="bottom-title">
          <h2>Semitone</h2>
          <p>Musical Instruments and Repairs</p>
        </div>

        <div className="bottombar-info">
          <div className="info-top">
            <p>Hours of Operation</p>
            <p>Street Address</p>
            <p>Phone Number</p>
          </div>
          <div className="info-bottom">
            <p>Email Address</p>
            <Link to="/Terms">
              <p>Terms and Conditions</p>
            </Link>
          </div>
        </div>
      
      </div>
  );
}
 
export default Bottombar;