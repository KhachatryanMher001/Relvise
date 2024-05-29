import React from "react";
import Header from "../layout/header/Header";
import ProductHeader from "./product_header/ProductHeader";
import ProductInformation from "./product_body/product_information/ProductInformation";

const Product = () => {
  return (
    <>
      <Header />
      <ProductHeader />
      <ProductInformation />
    </>
  );
};

export default Product;
