"use client";

import React, { useState } from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSession } from "next-auth/react";
import axiosInstance from "../../../services/axiosInstance";
import toast from "react-hot-toast";

const ContactUs = () => {
  const session = useSession();
  console.log(session?.data?.user);
  const sessionData = session?.data?.user;
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post("/contacts", formData)
      .then((res) => {
        toast.success(res.data.message);
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          number: "",
          description: "",
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {});
  };

  return (
    <div className="mx-auto grid max-w-[1440px] px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:px-20 grid-cols-1 lg:grid-cols-2 items-center gap-6">
      <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Get in touch
        </h2>
        <p className="mt-4 text-sm leading-6 text-gray-600">
          Proin volutpat consequat porttitor cras nullam gravida at. Orci
          molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
          sed malesuada et magna.
        </p>
        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
          <div className="flex gap-x-4 text-sm">
            <dt className="flex-none">
              <BuildingOffice2Icon
                className="h-6 w-5 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              545 Mavis Island
              <br />
              Chicago, IL 99191
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <PhoneIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
            </dt>
            <dd>
              <Link
                className="hover:text-gray-900 text-sm"
                href="tel:+1 (555) 234-5678"
              >
                +1 (555) 234-5678
              </Link>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <EnvelopeIcon
                className="h-6 w-5 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <Link
                className="hover:text-gray-900 text-sm"
                href="mailto:hello@example.com"
              >
                hello@example.com
              </Link>
            </dd>
          </div>
        </dl>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block text-xs text-gray-900"
              >
                First name
              </label>
              <div className="mt-0.5">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="block w-full px-4 py-1.5 text-gray-900 outline-none border text-sm"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-xs text-gray-900"
              >
                Last name
              </label>
              <div className="mt-0.5">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="block w-full px-4 py-1.5 text-gray-900 outline-none border text-sm"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-xs text-gray-900">
                Email
              </label>
              <div className="mt-0.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full px-4 py-1.5 text-gray-900 outline-none border text-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="number" className="block text-xs text-gray-900">
                Phone number
              </label>
              <div className="mt-0.5">
                <input
                  type="tel"
                  name="number"
                  id="number"
                  className="block w-full px-4 py-1.5 text-gray-900 outline-none border text-sm"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block text-xs text-gray-900"
              >
                Message
              </label>
              <div className="mt-0.5">
                <textarea
                  name="description"
                  id="description"
                  rows={4}
                  className="block w-full px-4 py-1.5 text-gray-900 outline-none border text-sm"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
