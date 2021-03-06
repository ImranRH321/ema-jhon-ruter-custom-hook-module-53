import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css';

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveButtton = product => {
    const rest = cart.filter(pd => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id)
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="shop-container">
        <div className="review-item-container">
          {cart.map(product => (
            <ReviewItem
              product={product}
              handleRemoveButtton={handleRemoveButtton}
              key={product.id}
            ></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            {/* <Link to="/inventory">
              <button>inventory</button>
            </Link> */}
            <button onClick={() => navigate('/inventory')}>Inventory</button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
