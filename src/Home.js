import { Link } from "react-router-dom";
import "./styles/home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="home-top-half">
        <Link to="/Shop">
          <img className="promo-guitar-image" src={ require('./imgs/guitars.jpg') } alt="guitars" />
        </Link>
        <div className="button-row-right">
          <Link to="/Rentals">
            <button>
              <h3>RENTALS</h3>
            </button>
          </Link>
          <Link to="/Repairs">
            <button>
              <h3>REPAIRS</h3>
            </button>
          </Link>
          <Link to="/About">
            <button>
              <h3>ABOUT US</h3>
            </button>
          </Link>
        </div>
      </div>
      <div className="home-bottom-half">
        <Link to="/Shop">
          <button>
              <h3>SHOP NOW!</h3>
          </button>
        </Link>
        <div className="deals">
          <h2> - Deal of the Day 1 - </h2>
          <h2> - Deal of the Day 2 - </h2>
          <h2> - Deal of the Day 3 - </h2>
          <h2> - Deal of the Day 4 - </h2>
          <h2> - Deal of the Day 5 - </h2>
        </div>
      </div>
    </div>
  );
}
 
export default Home;
