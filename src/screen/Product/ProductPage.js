import React from "react";
import MainLayout from "../../component/MainLayout";
import Product from "./Product";
import ProductList from "./ProductList";
const ProductPage = () => {
  return (
    <MainLayout>
      <ProductList />
    </MainLayout>
  );
};

export default ProductPage;
