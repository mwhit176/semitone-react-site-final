import "./styles/cart.css"

const Cart = () => {
  return (
    <div className="cart"> 
    {/* Possibly add an image of a cart here? */}
      <div className="cart-icon-and-text">
        <img className="cart-icon" src={ require('./imgs/cart.png') } alt="cart" />
        <h1>Your Cart</h1>
      </div>
      <div className="cart-organization">
        <div className="items-scrollpane">
          <h2>Items currently in your cart:</h2>
          <div className="items-list">
            <p>Item 1 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, quis!</p>
            <p>Item 2 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, quis!</p>
            <p>Item 3 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, quis!</p>
            <p>Item 4 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, quis!</p>
            <p>Item 5 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, quis!</p>
            <p>Item 6 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, quis!</p>
            <p>Item 7 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, quis!</p>
            <p>Item 8 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, quis!</p>
          </div>
        </div>
        <div className="payment-checkout-pane">
          <div className="payment-pane">
            <h1>Total: $XX.XX</h1>
            <h1>Tax: $XX.XX</h1>
            <h1>Grand Total: $XX.XX</h1>
          </div>
          {/* button disabled for now */}
          <button className="checkout">
            <h2>Check Out!</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default Cart;
