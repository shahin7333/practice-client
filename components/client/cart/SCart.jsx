import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Sienna",
    inStock: true,
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Black",
    inStock: false,
    leadTime: "3–4 weeks",
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35.00",
    color: "White",
    inStock: true,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
    imageAlt: "Insulated bottle with white base and black snap lid.",
  },
];
const relatedProducts = [
  {
    id: 1,
    name: "Billfold Wallet",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg",
    imageAlt: "Front of Billfold Wallet in natural leather.",
    price: "$118",
    color: "Natural",
  },
  // More products...
];

const SCart = () => {
  return (
    <div className="mx-auto px-4 pb-24 pt-16 sm:px-6 max-w-[1440px] lg:px-20">
      <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Shopping Cart
      </h1>
      <p className="text-sm mt-2">Items in your shopping cart</p>
      <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" className="lg:col-span-7">
          <ul
            role="list"
            className="divide-y divide-gray-200 border-b border-t border-gray-200"
          >
            {products.map((product, productIdx) => (
              <li key={product.id} className="flex py-4">
                <div className="flex-shrink-0">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-24 w-24 object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <Link
                            href={product.href}
                            className="font-medium text-gray-700 hover:text-gray-800"
                          >
                            {product.name}
                          </Link>
                        </h3>
                      </div>
                      <div className="mt-1 flex text-xs">
                        <p className="text-gray-500">{product.color}</p>
                        {product.size ? (
                          <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                            {product.size}
                          </p>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm font-medium text-indigo-600">
                        {product.price}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <select
                        id={`quantity-${productIdx}`}
                        name={`quantity-${productIdx}`}
                        className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                      </select>

                      <div className="absolute right-0 top-0">
                        <button
                          type="button"
                          className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Remove</span>
                          <XMarkIconMini
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 flex space-x-2 text-xs text-gray-700">
                    {product.inStock ? (
                      <CheckIcon
                        className="h-4 w-4 flex-shrink-0 text-green-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ClockIcon
                        className="h-4 w-4 flex-shrink-0 text-gray-300"
                        aria-hidden="true"
                      />
                    )}

                    <span>
                      {product.inStock
                        ? "In stock"
                        : `Ships in ${product.leadTime}`}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Order summary */}
        <section
          aria-labelledby="summary-heading"
          className="mt-16 bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
          <h2
            id="summary-heading"
            className="text-lg font-medium text-gray-900"
          >
            Order summary
          </h2>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-gray-600">Subtotal</dt>
              <dd className="text-sm font-medium text-gray-900">$99.00</dd>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt className="flex text-sm text-gray-600">
                <span>Tax estimate</span>
                <p className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                  <span className="text-xs">20%</span>
                </p>
              </dt>
              <dd className="text-sm font-medium text-gray-900">$8.32</dd>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt className="text-base font-medium text-gray-900">
                Order total
              </dt>
              <dd className="text-base font-medium text-gray-900">$112.32</dd>
            </div>
          </dl>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Checkout
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default SCart;
