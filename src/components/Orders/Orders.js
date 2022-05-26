import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
 console.log(cart);
  return (
    <div>
      <h1>This is Orders {products.length}</h1>
      <h3>cart items : {cart.length}</h3>
    </div>
  );
};

export default Orders;
