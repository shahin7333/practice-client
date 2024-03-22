import React from "react";
import axiosInstance from "../../../../services/axiosInstance";
import Category from "../../../../components/admin/category/Category"

const page = async() => {
  const categories = await axiosInstance.get('/categories')

  return (
    <Category categories={categories.data.payload.categories} />
  );
};

export default page;
