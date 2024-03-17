"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const Faqs = () => {
  const faqs = [
    {
      question: "What's the best thing about product?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Shipping?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about product?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Shipping?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ];
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
            placeholder="Search..."
            className="px-4 text-sm py-1.5 h-10 text-gray-900 border outline-none w-full lg:w-[400px] placeholder:text-sm"
          />
        </div>
      </div>
      <div className="mt-8">
        <dl className="grid sm:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div key={faq.id} className="border p-4 md:p-6">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-600">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Faqs;
