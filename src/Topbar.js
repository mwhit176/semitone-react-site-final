import { Link } from "react-router-dom";
import { LangContext } from "./LangContext";
import { useContext } from "react";
import "./styles/topbar.css"

const Topbar = () => {
  const {langBit, setLang} = useContext(LangContext);
  return (
      <div className="area">
        <Link to="/semitone-react-site-final">
          <img className="logo" src={ require('./imgs/strat.jpg') } alt="logo" />
        </Link>
        <div className="topbar-title">
          <h2>Semitone</h2>
          <p>Musical Instruments and Repairs</p>
        </div>
        <div className="lang-section">
          <button onClick={() => setLang(langBit === 0 ? 1 : 0) }>EN/FR</button>
        </div>
        <div className="cart-section">
          <p>Cart</p>
          <Link to="/Cart">
            <img className="cart-icon" src={ require('./imgs/cart.png') } alt="cart" />
          </Link>
        </div>
        
      </div>
  );
}
 
export default Topbar;