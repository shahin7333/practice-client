import React from "react";
import axiosInstance from "../../../../services/axiosInstance";
import Products from "../../../../components/admin/products/Products"

const page =async () => {
  const categories = await axiosInstance.get('/categories')
  const brands = await axiosInstance.get('/brands')

  return <Products categories={categories.data.payload.categories} brands={brands.data.payload.brands} />;
};

export default page;
