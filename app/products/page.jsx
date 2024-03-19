"use client";
import ProductList from "../../components/client/common/ProductList";
import React, { useState } from "react";

const page = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Organize Basic Set (Walnut)",
      price: "149",
      rating: 5,
      reviewCount: 38,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 2,
      name: "Organize Pen Holder",
      price: "15",
      rating: 5,
      reviewCount: 18,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 3,
      name: "Organize Sticky Note Holder",
      price: "15",
      rating: 5,
      reviewCount: 14,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 4,
      name: "Organize Phone Holder",
      price: "15",
      rating: 4,
      reviewCount: 21,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    // More products...
  ]);
  return (
    <>
      <ProductList
        data={products}
        title="Latest products"
        total={products.length}
        des="Highlighting its main purpose and key features"
      />
      <ProductList
        data={products}
        title="Similar products"
        des="Highlighting its main purpose and key features"
      />
    </>
  );
};

export default page;
