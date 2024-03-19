import React from "react";
import Link from "next/link";
const SingleProduct = ({ product }) => {
  return (
    <Link
      href={`/products/${product?._id}`}
      key={product?._id}
      className="border border-gray-200 hover:shadow-md"
    >
      <div className="overflow-hidden">
        <img
          src={product?.image}
          alt={product?.product_name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-sm font-medium text-gray-900">
          {product?.product_name}
        </h3>
        <p className="mt-4 text-base font-medium text-gray-900">
          ${product?.price}
        </p>
      </div>
    </Link>
  );
};

export default SingleProduct;
