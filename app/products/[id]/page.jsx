import ProductDetails from "../../../components/client/product-details/ProductDetails";
import React from "react";
import axiosInstance from "../../../services/axiosInstance";

const page = async ({ params }) => {
  const products = await axiosInstance.get(`/products/${params.id}`);
  const allProducts = products.data.payload.product;
  return <ProductDetails data={allProducts} />;
};

export default page;
