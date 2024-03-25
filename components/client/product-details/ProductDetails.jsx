"use client";

import Image from "next/image";
import { useAtom } from "jotai";
import toast from "react-hot-toast";
import { countAtom } from "../../../atom";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Disclosure } from "@headlessui/react";
import axiosInstance from "../../../services/axiosInstance";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetails = ({ data }) => {
  const router = useRouter();
  const session = useSession();
  const [count, setCount] = useAtom(countAtom);

  const addtoCart = () => {
    session.status === "authenticated" &&
    session?.data?.user?.role === "customer"
      ? axiosInstance
          .post("/cart", {
            productId: data._id,
            customerId: session?.data?.user._id,
            quantity: 1,
          })
          .then((res) => {
            toast.success(res.data.message);
            router.push("/cart");
          })
      : toast.error("Please, login first");
    setCount(count + 1);
  };

  return (
    <>
      <div className="mx-auto p-4 sm:p-6 lg:p-8 xl:p-20 lg:max-w-[1440px]">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <img
            src={`http://localhost:4000/images/` + data.image}
            alt=""
            className="max-h-[500px] w-full object-cover object-center"
          />

          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              {data.product_name}
            </h1>

            <div className="mt-3">
              <p className="text-lg font-medium tracking-tight text-indigo-600">
                ${data.price}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xs text-gray-700">{data.description}</p>
            </div>
            <div className="mt-10">
              <button
                onClick={addtoCart}
                className=" bg-indigo-600 px-8 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Add to cart
              </button>
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <div className="divide-y divide-gray-200 border-t">
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span
                            className={classNames(
                              open ? "text-indigo-600" : "text-gray-900",
                              "text-sm font-medium"
                            )}
                          >
                            Additional details
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel
                        as="div"
                        className="prose prose-sm pb-6"
                      >
                        <ul role="list" className="flex flex-col gap-2 text-sm">
                          <li>Stock In: {data?.quantity}</li>
                          <li>Brand Name: {data?.brand?.brand_name}</li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
