"use client";
import ProductList from "@/components/client/common/ProductList";
import Banner from "@/components/client/home/Banner";
import Incentives from "@/components/client/home/Incentives";
import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Organize Basic Set (Walnut)",
      price: "$149",
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
      price: "$15",
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
      price: "$15",
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
      price: "$15",
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
    <main className="">
      <Banner />
      <ProductList
        data={products}
        title="Featured products"
        des="Highlighting its main purpose and key features"
      />
      <ProductList
        data={products}
        title="Latest products"
        des="Highlighting its main purpose and key features"
      />
      <ProductList
        data={products}
        title="Hot deals"
        des="Highlighting its main purpose and key features"
      />
      <Incentives />
    </main>
  );
}
