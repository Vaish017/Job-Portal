import toast from "react-hot-toast";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const AdminLayout = () => {
  const { navigate, setAdmin, axios } = useContext(AppContext);
  

  const sidebarLinks = [
    { name: "Categories", path: "/admin" },
    { name: "Add Category", path: "/admin/add-category" },
    { name: "Companies", path: "/admin/all-companies" },
    { name: "Applications", path: "/admin/all-applicants" },
    { name: "Users", path: "/admin/all-users" },
    { name: "Jobs", path: "/admin/all-job" },
  ];

  const logout = async () => {
  try {
    const { data } = await axios.get("http://localhost:4000/api/auth/logout"); // changed to GET
    if (data.success) {
      setAdmin(false);
      navigate("/");
      toast.success(data.message);
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Logout failed");
  }
};

  return (
    <>
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <Link to={"/admin"}>
          <img src={assets.logo} alt="Logo" className="h-8" />
        </Link>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! admin</p>
          <button
            onClick={logout}
            className="border rounded-full text-sm px-4 py-1 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Layout */}
      <div className="flex">
        {/* Sidebar */}
        <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
          {sidebarLinks.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                to={item.path}
                key={index}
                className={`flex items-center py-3 px-4 gap-3 transition-colors duration-200
                  ${
                    isActive
                      ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500 font-medium"
                      : "hover:bg-gray-100/90 text-gray-700"
                  }`}
              >
                <p className="md:block hidden">{item.name}</p>
              </Link>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
