import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import "./styles/rentals.css"

const Rentals = () => {
  const rentalItemList = [{ id: 123, name: "Guitar", price: "449.99", image: "https://via.placeholder.com/100x100" },
  { id: 124, name: "Drums", price: "979.99", image: "https://via.placeholder.com/100x100" },
  { id: 114, name: "Trumpet", price: "9449.99", image: "https://via.placeholder.com/100x100" },
  { id: 224, name: "Tenor Saxophone", price: "949.99", image: "https://via.placeholder.com/100x100" },
  { id: 324, name: "Tuba", price: "949.98", image: "https://via.placeholder.com/100x100" },
  { id: 424, name: "Timpani", price: "945.99", image: "https://via.placeholder.com/100x100" },
  { id: 524, name: "Flute", price: "939.99", image: "https://via.placeholder.com/100x100" },
  { id: 624, name: "Piccolo", price: "949.99", image: "https://via.placeholder.com/100x100" },
  { id: 724, name: "Alto Saxophone", price: "349.99", image: "https://via.placeholder.com/100x100" },
  { id: 824, name: "Trombone", price: "949.99", image: "https://via.placeholder.com/100x100" },
  { id: 924, name: "Electric Bass", price: "19.99", image: "https://via.placeholder.com/100x100" },
  { id: 126, name: "Standing Bass", price: "350.00", image: "https://via.placeholder.com/100x100" }];

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
        {rentalItemList.map(item => {
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
        <div className="rentals-sort-by">

          <h2>Sort By:</h2>
          <div>
            <input
              id="low-price"
              value=""
              name="rentals-sort"
              type="radio"
            />
            Price: Low
          </div>

          <div>
            <input
              id="high-price"
              value=""
              name="rentals-sort"
              type="radio"
            />
            Price: High
          </div>
          <div>
            <input
              id="brand-name"
              value=""
              name="rentals-sort"
              defaultChecked="true"
              type="radio"
            />
            Brand Name
          </div>
          <div>
            <input
              id="new-product"
              value=""
              name="rentals-sort"
              type="radio"
            />
            New Products
          </div>
        </div>
        <div className="rentals-price-range">
          <h2>Price Range:</h2>
          <p>$XX.XX to $XX.XX</p>
        </div>
      </div>
    </div>
  );
}

export default Rentals;
