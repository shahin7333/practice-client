import ProductDetails from "../../../components/client/product-details/ProductDetails";
import React from "react";
import axiosInstance from "../../../services/axiosInstance";

const page = async () => {
  const details = await axiosInstance.get("/products/65f84e4d3d2f0976c075375c");
  console.log("details,", details);
  return <ProductDetails />;
};

export default page;
