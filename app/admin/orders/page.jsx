import React from "react";
import axiosInstance from "../../../services/axiosInstance";
import Orders from "../../../components/admin/orders/Orders";

const page = async () => {
  const orders = await axiosInstance.get("/order");

  return (
    <Orders
      orders={orders.data.payload.orders}
    />
  );
};

export default page;
