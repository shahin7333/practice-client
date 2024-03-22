import React from "react";
import Brand from "../../../../components/admin/brands/Brand";
import axiosInstance from "../../../../services/axiosInstance";

const page = async () => {
  const brandsList = await axiosInstance.get("/brands");
  return <Brand brands={brandsList.data.payload.brands} />;
};

export default page;
