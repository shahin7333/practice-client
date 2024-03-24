"use client";
import Link from "next/link";
import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "customer",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <h1 className="text-2xl font-bold text-indigo-600">Your Logo</h1>
        <h2 className="mt-4 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
          Registration a account
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-[360px]">
        <div className="bg-white p-6 shadow border">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-xs leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-0.5">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-0.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-0.5">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-xs leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-0.5">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <input
                id="role"
                name="role"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                value="customer"
                checked
                readOnly
              />
              <label
                htmlFor="role"
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                Customer
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
