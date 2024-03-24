import React, { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";
import {
  ChartBarIcon,
  CheckBadgeIcon,
  TruckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const Card = () => {
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalBrands, setTotalBrands] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axiosInstance.get("/users");
        const brandsResponse = await axiosInstance.get("/brands");
        const productsResponse = await axiosInstance.get("/products");
        const ordersResponse = await axiosInstance.get("/order");
        const userData = usersResponse.data.payload.users;
        const brandData = brandsResponse.data.payload.brands;
        const productData = productsResponse.data.payload.products;
        const orderData = ordersResponse.data.payload.orders;
        setTotalCustomers(userData.length);
        setTotalBrands(brandData.length);
        setTotalProducts(productData.length);
        setTotalOrders(orderData.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-green-500 p-4 md:p-6 shadow flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold text-white">{totalCustomers}</p>
          <p className="text-sm font-medium text-white">Total customers</p>
        </div>
        <div>
          <UsersIcon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="bg-indigo-500 p-4 md:p-6 shadow flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold text-white">{totalBrands}</p>
          <p className="text-sm font-medium text-white">Total Brands</p>
        </div>
        <div>
          <CheckBadgeIcon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="bg-red-500 p-4 md:p-6 shadow flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold text-white">{totalProducts}</p>
          <p className="text-sm font-medium text-white">Total Products</p>
        </div>
        <div>
          <ChartBarIcon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="bg-blue-500 p-4 md:p-6 shadow flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold text-white">{totalOrders}</p>
          <p className="text-sm font-medium text-white">Total Orders</p>
        </div>
        <div>
          <TruckIcon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Card;
