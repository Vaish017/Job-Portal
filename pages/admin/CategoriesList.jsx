import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const CategoriesList = () => {
  const { categoriesData, setCategoriesData ,axios } = useContext(AppContext);

  if (!categoriesData || categoriesData.length === 0) {
    return (
      <div className="p-6 bg-white rounded shadow text-gray-600">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          All Categories
        </h2>
        <p>No categories available.</p>
      </div>
    );
  }

  const handleDelete = (id) => {
    // TODO: integrate delete logic
    console.log("Delete category:", id);
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        All Categories
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="w-24 px-4 py-3 border-b">Logo</th>
              <th className="px-4 py-3 border-b">Category Name</th>
              <th className="w-32 px-4 py-3 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categoriesData.map((category) => (
              <tr key={category._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b align-middle">
                  <img
                    src={`http://localhost:4000/uploads/${category.logo}`}
                    alt={`${category.name} logo`}
                    className="w-12 h-12 object-cover border rounded"
                  />
                </td>
                <td className="px-4 py-3 border-b align-middle font-medium">
                  {category.name}
                </td>
                <td className="px-4 py-3 border-b text-center align-middle">
                  <button
                    onClick={() => handleDelete(category._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 active:scale-95"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriesList;
