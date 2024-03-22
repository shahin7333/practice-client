"use client";
import { useState } from "react";
import CommonModal from "../common/CommonModal";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import axiosInstance from "../../../services/axiosInstance";
import toast from "react-hot-toast";

const Products = ({ categories, brands, allProducts }) => {
  const [all_products, setAllProducts] = useState(allProducts);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deletePrduct, setDeletePrduct] = useState("");
  const [formData, setFormData] = useState({
    product_name: "",
    category_name: "",
    brand_name: "",
    price: "",
    quantity: "",
    stock: "",
    description: "",
    file: null,
  });
  console.log("fh:", formData);
  const handleEdit = (categoryId, categoryName) => {
    setEditId(categoryId);
    setEditName(categoryName);
    setEditOpen(true);
  };
  const handleDelete = (categoryId, categoryName) => {
    setDeleteId(categoryId);
    setDeletePrduct(categoryName);
    setDeleteOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/products", {
        product_name: formData.product_name,
        category: formData.category_name,
        brand: formData.brand_name,
        price: formData.price,
        stock: formData.stock,
        description: formData.description,
        quantity: formData.quantity,
        file: formData.file,
      });
      setAllProducts(res.data.payload.products);
      toast.success(res.data.message);
      setFormData({
        product_name: "",
        category_name: "",
        brand_name: "",
        price: "",
        quantity: "",
        stock: "",
        description: "",
        file: null,
      });
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setOpen(false);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div>
        <div className="sm:flex justify-between items-center">
          <div className="sm:flex-auto">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">
              Brand List
            </h1>
            <p className="mt-2 text-sm text-gray-700">A list of all brands.</p>
          </div>
          <button
            type="submit"
            onClick={() => setOpen(true)}
            className="flex justify-center bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white"
          >
            Add New
          </button>
        </div>
        <div className="mt-4 flow-root">
          <div className="overflow-x-auto border">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-4 text-left text-sm font-medium text-gray-900"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-4 text-left text-sm font-medium text-gray-900"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-4 text-left text-sm font-medium text-gray-900"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-4 text-left text-sm font-medium text-gray-900"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-4 text-left text-sm font-medium text-gray-900"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="font-medium text-gray-900 py-3.5 px-4"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {all_products?.map((product) => (
                    <tr key={product._id} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-2.5 px-4 text-sm font-medium text-gray-900">
                        {product.product_name}
                      </td>
                      <td className="whitespace-nowrap py-2.5 px-4 text-sm font-medium text-gray-900">
                        {product.category?.category_name}
                      </td>
                      <td className="whitespace-nowrap py-2.5 px-4 text-sm font-medium text-gray-900">
                        {product.brand?.brand_name}
                      </td>
                      <td className="whitespace-nowrap py-2.5 px-4 text-sm font-medium text-gray-900">
                        {product.price}
                      </td>
                      <td className="whitespace-nowrap py-2.5 px-4 text-sm font-medium text-gray-900">
                        {product.quantity}
                      </td>
                      <td className="py-3 px-4 flex gap-2 justify-center">
                        <div
                          className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                          onClick={() =>
                            handleEdit(product._id, product.product_name)
                          }
                        >
                          <PencilSquareIcon className="h-4 w-4" />
                        </div>
                        <div
                          onClick={() =>
                            handleDelete(product._id, product.product_name)
                          }
                          className="text-red-500 hover:text-red-600 cursor-pointer"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <CommonModal
        content={
          <form onSubmit={handleSubmit}>
            <h1 className="text-lg font-semibold mb-6">Add Product</h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs mb-1">Product Name</p>
                <input
                  id="product_name"
                  name="product_name"
                  type="text"
                  required
                  value={formData.product_name}
                  onChange={handleInputChange}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>
              <div>
                <p className="text-xs mb-1">Category Name</p>
                <select
                  id="category_name"
                  name="category_name"
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                  value={formData.category_name}
                  onChange={handleInputChange}
                >
                  {categories?.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.category_name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-xs mb-1">Brand Name</p>
                <select
                  id="brand_name"
                  name="brand_name"
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                  value={formData.brand_name}
                  onChange={handleInputChange}
                >
                  {brands?.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.brand_name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-xs mb-1">Price Name</p>
                <input
                  id="price"
                  name="price"
                  type="number"
                  min={0}
                  required
                  value={formData.price}
                  onChange={handleInputChange}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>
              <div>
                <p className="text-xs mb-1">Quantity</p>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min={0}
                  required
                  value={formData.quality}
                  onChange={handleInputChange}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>
              <div>
                <p className="text-xs mb-1">Stock</p>
                <input
                  id="stock"
                  name="stock"
                  type="number"
                  min={0}
                  required
                  value={formData.stock}
                  onChange={handleInputChange}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>
              <div>
                <p className="text-xs mb-1">Description</p>
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>
              <div>
                <p className="text-xs mb-1">File</p>
                <input
                  id="file"
                  name="file"
                  type="file"
                  value={formData.file}
                  onChange={handleFileChange}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex justify-center border border-indigo-600 text-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={() => setOpen(false)}
                className="flex justify-center bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white focus:outline-none"
              >
                Add New
              </button>
            </div>
          </form>
        }
        open={open}
        setOpen={setOpen}
      />
      <CommonModal
        content={
          <div>
            <h1 className="text-lg font-semibold mb-6">Edit Product</h1>
            {/* <div>
              <p className="text-xs mb-1">Brand Name</p>
              <input
                id="edit_brand_name"
                name="edit_brand_name"
                type="text"
                required
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
              />
            </div> */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs mb-1">Product Name</p>
                <input
                  id="product_name"
                  name="product_name"
                  type="text"
                  required
                  //   value={formData.email}
                  //   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>
              <div>
                <p className="text-xs mb-1">Category Name</p>
                <select
                  id="location"
                  name="location"
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                >
                  {categories?.map((item, index) => (
                    <option key={index}>{item.category_name}</option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-xs mb-1">Brand Name</p>
                <select
                  id="location"
                  name="location"
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                >
                  {brands?.map((item, index) => (
                    <option key={index}>{item.brand_name}</option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-xs mb-1">Price Name</p>
                <input
                  id="price"
                  name="price"
                  type="number"
                  min={0}
                  required
                  //   value={formData.email}
                  //   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>
              <div>
                <p className="text-xs mb-1">Quality</p>
                <input
                  id="quality"
                  name="quality"
                  type="number"
                  min={0}
                  required
                  //   value={formData.email}
                  //   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>
              <div>
                <p className="text-xs mb-1">Stock</p>
                <input
                  id="stock"
                  name="stock"
                  type="number"
                  min={0}
                  required
                  //   value={formData.email}
                  //   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>
              <div>
                <p className="text-xs mb-1">Description</p>
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  required
                  //   value={formData.email}
                  //   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>
              <div>
                <p className="text-xs mb-1">File</p>
                <input
                  id="file"
                  name="file"
                  type="file"
                  required
                  //   value={formData.email}
                  //   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={() => setEditOpen(false)}
                className="flex justify-center border border-indigo-600 text-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={() => setEditOpen(false)}
                className="flex justify-center bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        }
        open={editOpen}
        setOpen={setEditOpen}
      />
      <CommonModal
        content={
          <div className="p-6">
            <h1 className="text-sm font-semibold mb-6 text-center">
              Do you want to delete this{" "}
              <span className="text-red-500 text-sm font-medium">
                {deletePrduct}{" "}
              </span>{" "}
              ?
            </h1>
            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={() => setDeleteOpen(false)}
                className="flex justify-center border border-indigo-600 text-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={() => setDeleteOpen(false)}
                className="flex justify-center bg-red-500 px-6 py-1.5 text-sm font-semibold leading-6 text-white focus:outline-none"
              >
                Confirm
              </button>
            </div>
          </div>
        }
        open={deleteOpen}
        setOpen={setDeleteOpen}
      />
    </div>
  );
};

export default Products;
