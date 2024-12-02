"use client";
import React, { useEffect, useState } from "react";
import styles from "./cart.module.css";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState<any[]>([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartProducts(cartItems);
  }, []);

  const removeProduct = (id: number) => {
    const updatedCart = cartProducts.filter((product) => product.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartProducts(updatedCart);
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <div key={product.id} className={styles.cartItem}>
            <img src={product.image} height={100} />
            <div className={styles.details}>
              <div>{product.title}</div>
              <div>${product.price}</div>
            </div>
            <button onClick={() => removeProduct(product.id)} className={styles.removeButton}>
              Remove
            </button>
          </div>
        ))
      ) : (
        <div className={styles.emptyCart}>Your cart is empty</div>
      )}

      
    </div>
  );
}
