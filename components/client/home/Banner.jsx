import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 items-center lg:gap-x-10">
      <div className="order-2 md:order-1">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 xl:text-5xl">
          A better way to ship your{" "}
          <span className="text-indigo-500">products</span>
        </h1>
        <p className="mt-6 text-base leading-5 xl:text-md xl:leading-7 text-gray-600">
          Esse id magna consectetur fugiat non dolor in ad laboris magna laborum
          ea consequat. Nisi irure aliquip nisi adipisicing veniam voluptate id.
          In veniam incididunt ex veniam adipisicing sit.
        </p>
        <div className="mt-6 flex items-center gap-x-6">
          <Link
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </Link>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <Image
          className="w-full"
          src="/assets/banner.jpg"
          height="600"
          width="500"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
