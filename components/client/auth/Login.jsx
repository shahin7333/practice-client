"use client";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-4 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-[360px]">
        <div className="bg-white p-6 shadow border">
          <form className="space-y-4" onClick={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-xs leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-0.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
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
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs md:text-sm">Don't have an account?</p>

              <div className="text-sm leading-6">
                <Link
                  href="/auth/registration"
                  className="text-xs md:text-sm font-medium text-indigo-600"
                >
                  Registration Now
                </Link>
              </div>
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

export default Login;
