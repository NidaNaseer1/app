"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import style from "productCard.module.css";
import style from "./productCard.module.css";

export default function Productcard(props: any) {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const prod = props.product;

  const addToCart = () => {
    // Store product in localStorage for simplicity or use global state (Zustand/Redux)
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, prod];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Navigate to cart page
    // router.push("/cart");
  };

  const router = useRouter();

  function modifiedProductTitle(title: string) {
    const titleLength = 22;
    if (title.length > titleLength) {
      return title.substring(0, titleLength) + "...";
    }
    return title;
  }

  return (
    <div className={style.body}>
      <div>
        <Link href={"/Product/" + prod.id} style={{ color: "black", textDecorationLine: "none" }}>
          <div>
            <div className={style.image}>
              <img src={prod.image} height={150}  />
            </div>
            <div className={style.title}>{modifiedProductTitle(prod.title)}</div>
            <div className={style.category}>{prod.category}</div>
            <div className={style.price}>${prod.price}</div>
          </div>
        </Link>
      </div>
      <button onClick={addToCart} className={style.cart}>
        Add to cart
      </button>
    </div>
  );
}
