import { Link } from "react-router-dom";
import "./styles/rentals.css"

const Rentals = () => {
  const rentalItemList = [{ id: 123, name: "guitar", price: "449.99", image: "https://via.placeholder.com/100x100" },
  { id: 124, name: "drums", price: "979.99", image: "https://via.placeholder.com/100x100" },
  { id: 114, name: "drums2", price: "9449.99", image: "https://via.placeholder.com/100x100" },
  { id: 224, name: "drums3", price: "949.99", image: "https://via.placeholder.com/100x100" },
  { id: 324, name: "drums4", price: "949.98", image: "https://via.placeholder.com/100x100" },
  { id: 424, name: "drums5", price: "945.99", image: "https://via.placeholder.com/100x100" },
  { id: 524, name: "drums6", price: "939.99", image: "https://via.placeholder.com/100x100" },
  { id: 624, name: "drums7", price: "949.99", image: "https://via.placeholder.com/100x100" },
  { id: 724, name: "drums8", price: "349.99", image: "https://via.placeholder.com/100x100" },
  { id: 824, name: "drums9", price: "949.99", image: "https://via.placeholder.com/100x100" },
  { id: 924, name: "drums0", price: "19.99", image: "https://via.placeholder.com/100x100" },
  { id: 126, name: "tuba", price: "350.00", image: "https://via.placeholder.com/100x100" }];

  return (
    <div className="rentals">
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
