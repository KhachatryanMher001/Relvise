import React from "react";
import { Wrapper } from "./Layout.styled";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import SvgIcons from "./icon/svgIcon/svgIcons";
import GlobalStyle from "../../styles/Global";
import { Route, Routes } from "react-router-dom";
import Products from "../product/Products";
import Product from "../product/Product";

const Layout = () => {
  return (
    <>
      <Wrapper>
        <SvgIcons />
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
