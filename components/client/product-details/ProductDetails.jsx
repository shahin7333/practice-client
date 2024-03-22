"use client";
import { Disclosure, Tab } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useAtom } from "jotai";
import { countAtom } from "../../../atom";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetails = ({ data }) => {
  console.log("details", data);
  const [count, setCount] = useAtom(countAtom);
  const addtoCart = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="mx-auto p-4 sm:p-6 lg:p-8 xl:p-20 lg:max-w-[1440px]">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {data?.images?.map((image) => (
                  <Tab
                    key={image.id}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            src={data?.image || "/assets/default-image.jpg"}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-indigo-500" : "ring-transparent",
                            "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
              {data?.images?.map((image) => (
                <Tab.Panel key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group> */}
          <Image
            src={data?.image || "/assets/default-image.jpg"}
            alt=""
            className="max-h-[500px] w-full object-cover object-center"
            height="550"
            width="700"
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
              <Link
                href="/cart"
                onClick={addtoCart}
                className=" bg-indigo-600 px-8 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Add to cart
              </Link>
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
                          <li>Quantity: {data?.quantity}</li>
                          <li>Stock In: {data?.stock}</li>
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
      {/* <ProductList
        data={data}
        title="Similar products"
        des="Highlighting its main purpose and key features"
      /> */}
    </>
  );
};

export default ProductDetails;
