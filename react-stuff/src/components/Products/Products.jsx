import React from "react";

import styles from "../../styles/Products.module.css";
import { Link } from "react-router-dom";

const Products = ({ title, products = [] }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}

      {products.map(({ id, images, title, category: { name: cat }, price }) => (
        <Link to={`/products/${id}`} key={id}></Link>
      ))}
    </section>
  );
};
export default Products;
