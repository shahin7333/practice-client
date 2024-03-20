import React from "react";
import ProductList from "../../components/client/common/ProductList";
import axiosInstance from "../../services/axiosInstance";

const page = async () => {
  const products = await axiosInstance.get("/products?page=1&limit=8");
  const allProducts = products.data.payload.products;
  return (
    <>
      <ProductList
        data={allProducts}
        title="Latest products"
        total={allProducts.length}
        des="Highlighting its main purpose and key features"
      />
      <ProductList
        data={allProducts}
        title="Similar products"
        des="Highlighting its main purpose and key features"
      />
    </>
  );
};

export default page;
