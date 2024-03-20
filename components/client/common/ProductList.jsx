import React from "react";
import SingleProduct from "./SingleProduct";
import Link from "next/link";
import axiosInstance from "../../../services/axiosInstance";

const ProductList = async ({ id, title, des }) => {
  const products = await axiosInstance.get(
    `/products?page=1&limit=8&categoryId=${id}`
  );
  const allProducts = products.data.payload.products;
  console.log(allProducts);

  return (
    <>
      {allProducts.length > 0 && (
        <div className="mx-auto max-w-[1440px] overflow-hidden my-8  px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>
            <p className="text-gray-700">{des}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts?.map((item) => (
              <SingleProduct key={item.id} product={item} />
            ))}
          </div>
          <div className="pt-8 flex justify-end">
            <Link
              href="/products"
              className="px-6 py-2 bg-indigo-500 text-white"
            >
              View All
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
