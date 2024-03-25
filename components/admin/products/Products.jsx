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
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deletePrduct, setDeletePrduct] = useState("");
  const [formData, setFormData] = useState({
    product_name: "",
    category: "",
    brand: "",
    price: "",
    quantity: "",
    description: "",
    image: null,
  });
  console.log("from", formData);
  const [editFormData, setEditFormData] = useState({
    product_name: "",
    category: "",
    brand: "",
    price: "",
    quantity: "",
    description: "",
    // image: null
  });
  console.log("fh:", editFormData);
  const handleEdit = (
    productId,
    productName,
    categoryName,
    brandName,
    price,
    quantity,
    description
  ) => {
    setEditId(productId);
    setEditFormData({
      product_name: productName,
      category: categoryName,
      brand: brandName,
      price: price,
      quantity: quantity,
      description: description,
      image: null,
    });
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

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // const handleEditFileChange = (e) => {
  //   setEditFormData({
  //     ...editFormData,
  //     file: e.target.files[0],
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append("product_name", formData.product_name);
    productData.append("category", formData.category);
    productData.append("brand", formData.brand);
    productData.append("price", formData.price);
    productData.append("quantity", formData.quantity);
    productData.append("description", formData.description);
    productData.append("image", formData.image);

    await axiosInstance
      .post("/products", productData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setAllProducts(res.data.payload.products);
        toast.success(res.data.message);
        setOpen(false);

        setFormData({
          product_name: "",
          category: "",
          brand: "",
          price: "",
          quantity: "",
          description: "",
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const handleDeleteProduct = (id) => {
    axiosInstance
      .delete(`/products/${id}`)
      .then((res) => {
        setAllProducts(res.data.payload.products);
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setDeleteOpen(false);
      });
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .patch(`/products/${editId}`, {
        product_name: editFormData.product_name,
        category: editFormData.category,
        brand: editFormData.brand,
        price: editFormData.price,
        description: editFormData.description,
        quantity: editFormData.quantity,
        // file: editFormData.file,
      })
      .then((res) => {
        toast.success(res.data.message);
        setAllProducts(res.data.payload.products);
        setEditFormData({
          product_name: "",
          category: "",
          brand: "",
          price: "",
          quantity: "",
          description: "",
          // file: null,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setEditOpen(false);
      });
  };

  return (
    <div className="p-4 md:p-6">
      <div>
        <div className="sm:flex justify-between items-center">
          <div className="sm:flex-auto">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">
              Product List
            </h1>
            <p className="mt-2 text-sm text-gray-700">A list of all product.</p>
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
                            handleEdit(
                              product._id,
                              product.product_name,
                              product.category?.category,
                              product.brand?.brand,
                              product.price,
                              product.quantity,
                              product.description,
                              product.file
                            )
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
                  id="category"
                  name="category"
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                  value={formData.category}
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
                  id="brand"
                  name="brand"
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                  value={formData.brand}
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
                <p className="text-xs mb-1">Price</p>
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
                <p className="text-xs mb-1">File</p>
                <input type="file" name="image" onChange={handleChange} />
              </div>
            </div>
            <div className="w-full mt-4">
              <p className="text-xs mb-1">Description</p>
              <textarea
                id="description"
                name="description"
                type="text"
                required
                rows={7}
                value={formData.description}
                onChange={handleInputChange}
                className="block w-full border py-2 outline-none px-4 text-sm text-gray-900 shadow-sm placeholder:text-gray-400"
              />
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
          <form onSubmit={handleEditSubmit}>
            <h1 className="text-lg font-semibold mb-6">Edit Product</h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs mb-1">Product Name</p>
                <input
                  id="product_name"
                  name="product_name"
                  type="text"
                  required
                  value={editFormData.product_name}
                  onChange={handleEditInputChange}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>
              <div>
                <p className="text-xs mb-1">Category Name</p>
                <select
                  id="category"
                  name="category"
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                  value={editFormData.category}
                  onChange={handleEditInputChange}
                >
                  {categories?.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-xs mb-1">Brand Name</p>
                <select
                  id="brand"
                  name="brand"
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                  value={editFormData.brand}
                  onChange={handleEditInputChange}
                >
                  {brands?.map((item) => (
                    <option
                      key={item._id}
                      value={item._id}
                      selected={item._id === editFormData.brand}
                    >
                      {item.brand}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-xs mb-1">Price</p>
                <input
                  id="price"
                  name="price"
                  type="number"
                  min={0}
                  required
                  value={editFormData.price}
                  onChange={handleEditInputChange}
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
                  value={editFormData.quantity}
                  onChange={handleEditInputChange}
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
                  value={editFormData.description}
                  onChange={handleEditInputChange}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>
              {/* <div>
                <p className="text-xs mb-1">File</p>
                <input
                  id="file"
                  name="file"
                  type="file"
                  value={editFormData.file}
                  onChange={handleEditFileChange}
                  className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 cursor-pointer"
                />
              </div> */}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <button
                type="button"
                onClick={() => setEditOpen(false)}
                className="flex justify-center border border-indigo-600 text-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex justify-center bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
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
                onClick={() => handleDeleteProduct(deleteId)}
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
