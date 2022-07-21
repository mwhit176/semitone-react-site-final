import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import MultiRangeSlider from "./multiRangeSlider/multiRangeSlider";
import "./styles/rentals.css"

const Rentals = () => {
  const rentalItemList = [{ id: 123, name: "Guitar", price: "449.99", image: "https://via.placeholder.com/100x100" },
  { id: 124, name: "Drums", price: "779.99", image: "https://via.placeholder.com/100x100" },
  { id: 114, name: "Trumpet", price: "644.99", image: "https://via.placeholder.com/100x100" },
  { id: 224, name: "Tenor Saxophone", price: "649.99", image: "https://via.placeholder.com/100x100" },
  { id: 324, name: "Tuba", price: "949.98", image: "https://via.placeholder.com/100x100" },
  { id: 424, name: "Timpani", price: "445.99", image: "https://via.placeholder.com/100x100" },
  { id: 524, name: "Flute", price: "839.99", image: "https://via.placeholder.com/100x100" },
  { id: 624, name: "Piccolo", price: "549.99", image: "https://via.placeholder.com/100x100" },
  { id: 724, name: "Alto Saxophone", price: "349.99", image: "https://via.placeholder.com/100x100" },
  { id: 824, name: "Trombone", price: "349.99", image: "https://via.placeholder.com/100x100" },
  { id: 924, name: "Electric Bass", price: "19.99", image: "https://via.placeholder.com/100x100" },
  { id: 126, name: "Standing Bass", price: "350.00", image: "https://via.placeholder.com/100x100" }];

  const [comparisonMethod, setComparisonMethod] = useState("3");
  const [[valueMin, valueMax], setValueMethod] = useState(["0", "10000"]);

  const onChangedComparison = (e) => {
    console.log(e.target.value);
    setComparisonMethod(e.target.value);
  }

  const compareListItems = (a, b) => {
    if (comparisonMethod === "0") {
      return a.name > b.name ? 1 : -1;
    } else if (comparisonMethod === "1") {
      return parseFloat(a.price) > parseFloat(b.price) ? 1 : -1;
    } else if (comparisonMethod === "2") {
      return parseFloat(a.price) > parseFloat(b.price) ? -1 : 1;
    } else {
      return a.id < b.id ? 1 : -1;
    }
  }

  return (
    <div className="rentals">
      <Helmet>
        <title>Rentals | Semitone Musical Instruments and Repairs</title>
      </Helmet>
      <div className="rentals-subcategories">
        <h2>Rent Subcategories:</h2>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
      </div>
      <div className="rentals-items-list">
        {rentalItemList.sort((a, b) => compareListItems(a, b)).filter((o) => o.price >= valueMin && o.price <= valueMax).map(item => {
          return (
            <Link to="/RentalItem">
            <div className="rentals-item-box">
              <img className="rentals-item-image" src={item.image} alt="img" />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
            </Link>
          )
        })}
      </div>
      <div className="rentals-filters">
        <div className="rentals-sort-by" onChange={onChangedComparison}>

          <h2>Sort By:</h2>
          <div>
            <input
              id="low-price"
              value="1"
              name="rentals-sort"
              type="radio"
            />
            Price: Low
          </div>

          <div>
            <input
              id="high-price"
              value="2"
              name="rentals-sort"
              type="radio"
            />
            Price: High
          </div>
          <div>
            <input
              id="brand-name"
              value="0"
              name="rentals-sort"
              defaultChecked="true"
              type="radio"
            />
            Instrument Name
          </div>
          <div>
            <input
              id="new-product"
              value="3"
              name="rentals-sort"
              type="radio"
            />
            New Products
          </div>
        </div>
        <div className="rentals-price-range">
          <h2>Price Range:</h2>
          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) => setValueMethod([min, max])}
          />
        </div>
      </div>
    </div>
  );
}

export default Rentals;
