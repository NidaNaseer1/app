"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import style from "./productCard.module.css";

interface Product {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
}

interface ProductCardProps {
  product?: Product; // `product` can be undefined to handle edge cases
}

export default function Productcard(props: ProductCardProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product[]>([]);
  const prod = props.product;

  const addToCart = () => {
    if (prod) {
      // Store product in localStorage for simplicity or use global state (Zustand/Redux)
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = [...existingCart, prod];
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Navigate to cart page
      const router = useRouter();
      router.push("/cart");
    }
  };

  function modifiedProductTitle(title: string) {
    const titleLength = 22;
    if (title.length > titleLength) {
      return title.substring(0, titleLength) + "...";
    }
    return title;
  }

  if (!prod) {
    // Render a fallback UI when `product` is not available
    return <div>Product data is unavailable</div>;
  }

  return (
    <div className={style.body}>
      <div>
        <Link href={`/Product/${prod.id}`} style={{ color: "black", textDecoration: "none" }}>
          <div>
            <div className={style.image}>
              <img src={prod.image} alt={prod.title} height={150} />
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
