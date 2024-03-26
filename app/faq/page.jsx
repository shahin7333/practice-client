import Faqs from "../../components/client/faq/Faqs";
import React from "react";
import axiosInstance from "../../services/axiosInstance";

const page = async () => {
  const faqs = await axiosInstance.get("/faqs");
  return <Faqs faqs={faqs.data.payload.faqs} />;
};

export default page;
