import { Link } from "react-router-dom";
import "./styles/repairs.css"
import Calendar from "react-calendar";

const Repairs = () => {

  const repairsList = [{ id: 123, name: "dent repair", price: "449.99", image: "https://via.placeholder.com/100x100" },
  { id: 124, name: "restring", price: "979.99", image: "https://via.placeholder.com/100x100" },
  { id: 114, name: "tune-up", price: "9449.99", image: "https://via.placeholder.com/100x100" },
  { id: 224, name: "assessment", price: "949.99", image: "https://via.placeholder.com/100x100" },
  { id: 324, name: "cleaning", price: "949.98", image: "https://via.placeholder.com/100x100" },
  { id: 424, name: "repaint", price: "945.99", image: "https://via.placeholder.com/100x100" },
  { id: 524, name: "tune-up2", price: "939.99", image: "https://via.placeholder.com/100x100" },
  { id: 624, name: "cleaning3", price: "949.99", image: "https://via.placeholder.com/100x100" },
  { id: 724, name: "cleaning5", price: "349.99", image: "https://via.placeholder.com/100x100" },
  { id: 824, name: "dent repair1", price: "949.99", image: "https://via.placeholder.com/100x100" },
  { id: 924, name: "repaint2", price: "19.99", image: "https://via.placeholder.com/100x100" },
  { id: 126, name: "demolish", price: "350.00", image: "https://via.placeholder.com/100x100" }];

  return (
    <div className="repairs">
      <div className="instrument-calendar">
        <div className="instrument-selection">
          <h2>Select your Instrument:</h2>
          <select>
            <option value="guitar">Guitar</option>
            <option value="drums">Drums</option>
            <option selected value="tuba">Tuba</option>
            <option value="saxophone">Saxophone</option>
          </select>
        </div>
        <div className="calendar-repairs">
          <Calendar />
        </div>
      </div>
      <div className="repairs-list">
        {repairsList.map(repair => {
          return (
            <div className="repair-item-box">
              <Link to="/Book">
                <img className="repair-item-image" src={repair.image} alt="img" />
                <h3>{repair.name}</h3>
                <p>${repair.price}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Repairs;
