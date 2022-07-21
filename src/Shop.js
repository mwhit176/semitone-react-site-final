import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import "./styles/shop.css"

const Shop = () => {
  const shopItemList = [{ id: 123, name: "Guitar 1", price: "449.99", image: "https://via.placeholder.com/100x100" },
  { id: 124, name: "Guitar 2", price: "979.99", image: "https://via.placeholder.com/100x100" },
  { id: 114, name: "Guitar 3", price: "9449.99", image: "https://via.placeholder.com/100x100" },
  { id: 224, name: "Guitar 4", price: "949.99", image: "https://via.placeholder.com/100x100" },
  { id: 324, name: "Guitar 5", price: "949.98", image: "https://via.placeholder.com/100x100" },
  { id: 424, name: "Amplifier 1", price: "945.99", image: "https://via.placeholder.com/100x100" },
  { id: 524, name: "Amplifier 2", price: "939.99", image: "https://via.placeholder.com/100x100" },
  { id: 624, name: "Amplifier 3", price: "949.99", image: "https://via.placeholder.com/100x100" },
  { id: 724, name: "Amplifier 4", price: "349.99", image: "https://via.placeholder.com/100x100" },
  { id: 824, name: "Trumpet", price: "949.99", image: "https://via.placeholder.com/100x100" },
  { id: 924, name: "Trombone", price: "19.99", image: "https://via.placeholder.com/100x100" },
  { id: 126, name: "Drumset", price: "350.00", image: "https://via.placeholder.com/100x100" }];

  return (
    <div className="shop">
      <Helmet>
        <title>Shop | Semitone Musical Instruments and Repairs</title>
      </Helmet>
      <div className="shop-subcategories">
        <h2>Buy Subcategories:</h2>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
      </div>
      <div className="shop-items-list">
        {shopItemList.map(item => {
          return (
            <Link to="/ShopItem">
              <div className="shop-item-box">
                <img className="shop-item-image" src={item.image} alt="img" />
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
            </Link>
          )
        })}
      </div>
      <div className="shop-filters">
        <div className="shop-sort-by">

          <h2>Sort By:</h2>
          <div>
            <input
              id="low-price"
              value=""
              name="shop-sort"
              type="radio"
            />
            Price: Low
          </div>

          <div>
            <input
              id="high-price"
              value=""
              name="shop-sort"
              type="radio"
            />
            Price: High
          </div>
          <div>
            <input
              id="brand-name"
              value=""
              name="shop-sort"
              type="radio"
            />
            Brand Name
          </div>
          <div>
            <input
              id="new-product"
              value=""
              name="shop-sort"
              type="radio"
            />
            New Products
          </div>
        </div>
        <div className="shop-price-range">
          <h2>Price Range:</h2>
          <p>$XX.XX to $XX.XX</p>
        </div>
      </div>
    </div>
  );
}

export default Shop;
