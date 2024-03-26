import React from "react";
import FAQ from "../../../components/admin/faq/FAQ";
import axiosInstance from "../../../services/axiosInstance";

const page = async () => {
  const faqs = await axiosInstance.get("/faqs");
  return <FAQ faqs={faqs.data.payload.faqs} />;
};

export default page;
