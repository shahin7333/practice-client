import React from "react";
import ProductList from "../../components/client/common/ProductList";
import axiosInstance from "../../services/axiosInstance";

const page = async () => {
  const products = await axiosInstance.get("/categories");
  const allCategory = products.data.payload.categories;
  return (
    <>
      {allCategory?.map((category) => (
        <ProductList
          id={category._id}
          title={category?.category_name}
          des="Highlighting its main purpose and key features"
        />
      ))}
      {/* <ProductList
        data={allProducts}
        title="Similar products"
        des="Highlighting its main purpose and key features"
      /> */}
    </>
  );
};

export default page;
