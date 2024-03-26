"use client";
import React, { useState } from "react";
import axiosInstance from "../../../services/axiosInstance";

const Faqs = ({ faqs }) => {
  const [faqData, setFaqData] = useState(faqs);
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    axiosInstance.get(`/faqs?search=${searchValue}`).then((res) => {
      setFaqData(res.data.payload.faqs);
    });
  };
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:px-20">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-sm leading-5 text-gray-600">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              sending us an email
            </a>{" "}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="flex justify-end items-end">
          <input
            type="search"
            name="search"
            id="search"
            onChange={handleChange}
            placeholder="Search by title"
            className="px-4 text-sm py-1.5 h-10 text-gray-900 border outline-none w-full lg:w-[400px] placeholder:text-sm"
          />
        </div>
      </div>
      <div className="mt-8">
        <dl className="grid sm:grid-cols-2 gap-6">
          {faqData.map((faq) => (
            <div key={faq._id} className="border p-4 md:p-6">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                {faq.title}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-600">
                {faq.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Faqs;
