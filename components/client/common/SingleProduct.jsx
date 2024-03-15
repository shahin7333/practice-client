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
        <div className="mt-3 flex flex-col items-center">
          <p className="sr-only">{product.rating} out of 5 stars</p>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  product.rating > rating ? "text-yellow-400" : "text-gray-200",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {product.reviewCount} reviews
          </p>
        </div>
        <p className="mt-4 text-base font-medium text-gray-900">
          {product.price}
        </p>
      </div>
    </Link>
  );
};

export default SingleProduct;
