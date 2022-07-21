import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useAlert } from 'react-alert'
import ReactAudioPlayer from 'react-audio-player';
import "./styles/shopitem.css"

const RentalItem = () => {

    const alert = useAlert()

    return (
        <div className="shop-item">
            <Helmet>
                <title>Rental Item | Semitone Musical Instruments and Repairs</title>
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

                <iframe
                    width="340px"
                    height="235px"
                    src={"https://www.youtube.com/embed/y6120QOlsfU"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />

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
                            <Link to="/Rentals">
                                <button className="add-to-cart-button" onClick={() => {
                                    alert.show(<div style={{ color: 'white'}}>Successfully Added to Cart!</div>)
                                    }}>Add to cart</button>
                            </Link>
                        </div>
                        <select className="selector-rental">
                            <option selected value="Rental Length:">Rental Length:</option>
                            <option value="1 month">1 month</option>
                            <option value="2 months">2 months</option>
                            <option value="3 months">3 months</option>
                        </select>
                        <div className="music-sample-rental">
                            <p>Listen to an audio sample!</p>
                            <ReactAudioPlayer
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Reveille_on_bugle.ogg"
                                controls
                            />
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
                            defaultChecked="true"
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

export default RentalItem;
