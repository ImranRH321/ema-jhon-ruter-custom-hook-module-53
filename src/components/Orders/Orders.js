import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveButtton = products => {
    const rest = cart.filter(pd => pd.id !== products.id)
    setCart(rest)
  }
   return (
    <div>
      <div className="shop-container">
        <div className="review-item-container">
          {cart.map(product => (
            <ReviewItem product={product} handleRemoveButtton={handleRemoveButtton} key={product.id}></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
