import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const SingleProduct = ({ product }) => {
  return (
    <Link
      href={`/products/1`}
      key={product.id}
      className="border border-gray-200 hover:shadow-md"
    >
      <div className="overflow-hidden">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <p className="mt-4 text-base font-medium text-gray-900">
          {product.price}
        </p>
      </div>
    </Link>
  );
};

export default SingleProduct;
