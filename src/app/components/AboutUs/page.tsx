// src/app/about/AboutUs.tsx

"use client";

import React from "react";
import styles from "./about.module.css";

const AboutUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Welcome to [Your Store Name], where we offer a wide range of high-quality products to cater to your every need. 
        Our mission is to provide our customers with the best shopping experience possible, ensuring that you find exactly 
        what you're looking for.
      </p>
      <h2 className={styles.subtitle}>Our Story</h2>
      <p className={styles.description}>
        [Your Store Name] was founded in [Year] with a passion for providing exceptional products and customer service. 
        Over the years, we have grown into a trusted source for [type of products you sell].
      </p>
      <h2 className={styles.subtitle}>Our Commitment</h2>
      <p className={styles.description}>
        We are committed to quality, affordability, and excellent customer service. Our dedicated team works tirelessly 
        to ensure that every product meets our high standards. 
      </p>
      <h2 className={styles.subtitle}>Join Us</h2>
      <p className={styles.description}>
        Thank you for choosing [Your Store Name]. We look forward to serving you and providing you with the best products 
        and service in the industry.
      </p>
    </div>
  );
};

export default AboutUs;


