import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import "./styles/shopitem.css"

const ShopItem = () => {

  return (
    <div className="shop-item">
      <Helmet>
        <title>Shop Item | Semitone Musical Instruments and Repairs</title>
      </Helmet>
      <div className="shop-item-subcategories">
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

      <div className="shop-center">
        <div className="shop-center-top">
          <img src="https://via.placeholder.com/200x200" alt="item" />
          <div className="shop-item-info">
            <h2>Brand</h2>
            <h3>Item Name</h3>
            <h3>Specifications</h3>
            <h1>$XX.XX</h1>
          </div>
        </div>

        <div className="shop-center-bottom">
          <div className="format-aid-div">
            <div className="container-add-to-cart">
              <img src="https://via.placeholder.com/100x100" alt="item" />
              <Link to="/Cart">
                <button className="add-to-cart-button">Add to cart</button>
              </Link>
            </div>
            <div className="music-sample">
              Click here to listen to an audio sample!
            </div>
          </div>
          <div className="shop-item-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nemo, maiores nostrum earum voluptate repudiandae similique nobis atque rerum consectetur nulla neque ullam magni asperiores praesentium? Id obcaecati ullam aut?
          </div>
        </div>
      </div>


      <div className="shop-item-filters">
        <div className="shop-item-sort-by">

          <h2>Sort By:</h2>
          <div>
            <input
              id="low-price"
              value=""
              name="shop-item-sort"
              type="radio"
            />
            Price: Low
          </div>

          <div>
            <input
              id="high-price"
              value=""
              name="shop-item-sort"
              type="radio"
            />
            Price: High
          </div>
          <div>
            <input
              id="brand-name"
              value=""
              name="shop-item-sort"
              type="radio"
            />
            Brand Name
          </div>
          <div>
            <input
              id="new-product"
              value=""
              name="shop-item-sort"
              type="radio"
            />
            New Products
          </div>
        </div>
        <div className="shop-item-price-range">
          <h2>Price Range:</h2>
          <p>$XX.XX to $XX.XX</p>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;