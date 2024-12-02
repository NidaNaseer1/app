"use client";

import React, { useState, useEffect } from "react";
import { productsServices } from "@/app/services/product-service"; // Adjust the path according to your project structure
import Productcard from "../productCard/page"; // Adjust the import path
import styles from "./productlist.module.css";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export default function Productlist() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await productsServices.getProducts(); // Fetch products from service
        setProducts(productList);
        setFilteredProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleCategoryChange = (category: string) => {
    const updatedCategories = new Set(selectedCategories);
    if (updatedCategories.has(category)) {
      updatedCategories.delete(category);
    } else {
      updatedCategories.add(category);
    }
    setSelectedCategories(updatedCategories);
    filterProducts(updatedCategories, priceRange);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newRange = [...priceRange] as [number, number];
    newRange[index] = Number(event.target.value);
    setPriceRange(newRange);
    filterProducts(selectedCategories, newRange);
  };

  const filterProducts = (categories: Set<string>, priceRange: [number, number]) => {
    let filtered = products;

    if (categories.size > 0) {
      filtered = filtered.filter((product) => categories.has(product.category));
    }

    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  };

  const addToCart = (product: Product) => {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar with Filters */}
      <aside className={styles.sidebar}>
        <h3>Filters</h3>

        {/* Category Filter */}
        <div>
          <h4>Category</h4>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCategories.has(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range Filter */}
        <div>
          <h4>Price Range</h4>
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className={styles["range-slider"]}
          />
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className={styles["range-slider"]}
          />
          <p>
            Price: ${priceRange[0]} - ${priceRange[1]}
          </p>
        </div>
      </aside>

      {/* Product List */}
      <div className={styles["product-list"]}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Productcard key={product.id} product={product} onAddToCart={() => addToCart(product)} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
