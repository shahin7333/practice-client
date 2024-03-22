"use client";
import React, { useState } from "react";
import CommonModal from "../common/CommonModal";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import axiosInstance from "../../../services/axiosInstance";
import toast from "react-hot-toast";
const Brand = ({ brands }) => {
  const [open, setOpen] = useState(false);
  const [brandName, setBrandName] = useState("");
  const [allBrands, setAllBrands] = useState(brands);
  const [editOpen, setEditOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteCategoryName, setDeleteCategoryName] = useState("");
  const handleEdit = (categoryId, categoryName) => {
    setEditId(categoryId);
    setEditName(categoryName);
    setEditOpen(true);
  };
  const handleDelete = (categoryId, categoryName) => {
    setDeleteId(categoryId);
    setDeleteCategoryName(categoryName);
    setDeleteOpen(true);
  };

  const handleChange = (e) => {
    setBrandName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post("/brands", { brand_name: brandName })
      .then((res) => {
        setAllBrands(res.data.payload.brands);
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setBrandName("");
        setOpen(false);
      });
  };

  const handleDeleteBrand = (id) => {
    axiosInstance
      .delete(`/brands/${id}`)
      .then((res) => {
        setAllBrands(res.data.payload.brands);
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setDeleteOpen(false);
      });
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
                      Brand
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
                  {allBrands.map((brand, index) => (
                    <tr key={index} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-2.5 px-4 text-sm font-medium text-gray-900">
                        {brand.brand_name}
                      </td>
                      <td className="py-3 px-4 flex gap-2 justify-center">
                        <div
                          className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                          onClick={() =>
                            handleEdit(brand._id, brand.brand_name)
                          }
                        >
                          <PencilSquareIcon className="h-4 w-4" />
                        </div>
                        <div
                          onClick={() => handleDelete(brand._id, brand.brand)}
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
            <h1 className="text-lg font-semibold mb-6">Add Brand Name</h1>
            <div>
              <p className="text-xs mb-1">Brand Name</p>
              <input
                id="brand_name"
                name="brand_name"
                type="text"
                required
                value={brandName}
                onChange={handleChange}
                className="block w-full border outline-none px-4 text-sm py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
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
            <h1 className="text-lg font-semibold mb-6">Edit Brand Name</h1>
            <div>
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
                {deleteCategoryName}{" "}
              </span>{" "}
              brand?
            </h1>
            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={() => setDeleteOpen(false)}
                className="flex justify-center border border-indigo-600 text-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteBrand(deleteId)}
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

export default Brand;
