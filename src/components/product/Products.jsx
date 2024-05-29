import React from "react";
import ProductBody from "./product_body/ProductBody";
import Header from "../layout/header/Header";
import ProductsCard from "./products/ProductsCard";
import Other from "./product_footer/card_other/Other";

const Products = () => {
  return (
    <>
      <Header />
      <ProductBody />
      <ProductsCard />
      <Other />
    </>
  );
};

export default Products;
