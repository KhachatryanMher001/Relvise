import "./App.css";
import Layout from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;
