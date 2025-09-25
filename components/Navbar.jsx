/*import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { navigate, setQuery, user, setUser } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setQuery(input);
      navigate("/all-jobs");
      setInput("");
    }
  };

  const logout = () => {
    setUser(false);
    navigate("/");
    toast.success("Logout successfully");
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" />
      </Link>

      
      <div className="hidden sm:flex items-center gap-8">
        <Link to={"/"}>Home</Link>
        <Link to={"/all-jobs"}>Jobs</Link>
        <Link to={"/about"}>About</Link>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Jobs"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleSearch}
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              clip-rule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {user ? (
          <div
            className="relative inline-block"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <img
              src={assets.user_profile}
              alt=""
              className="w-12 h-12 rounded-full cursor-pointer border border-gray-300"
            />

            {isOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded py-2 z-50">
                <p
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate("/my-application")}
                >
                  My application
                </p>
                <p
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </p>
                <p
                  className="px-4 py-2 text-red-500 cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer px-8 py-2 bg-primary transition text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >

        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

    
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/all-jobs"}>Jobs</Link>
        <Link to={"/about"}>About</Link>
        <button
          onClick={() => navigate("/login")}
          className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-indigo-600 transition text-white rounded-full text-sm"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;*/

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const Navbar = () => {
  const { navigate, setQuery, user, setUser, axios } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setQuery(input);
      navigate("/all-jobs");
      setInput("");
    }
  };

   const logout = async () => {
  try {
    const { data } = await axios.get("http://localhost:4000/api/auth/logout"); // changed to GET
    if (data.success) {
      setUser(false);
      navigate("/");
      toast.success(data.message);
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Logout failed");
  }
};

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Logo */}
      <Link to={"/"} className="flex items-center gap-2">
        <img src={assets.logo} alt="Job Portal Logo" className="h-8 w-auto" />
        <span className="font-bold text-lg hidden sm:inline">JobPortal</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to={"/"} className="hover:text-primary transition">
          Home
        </Link>
        <Link to={"/all-jobs"} className="hover:text-primary transition">
          Jobs
        </Link>
        <Link to={"/about"} className="hover:text-primary transition">
          About
        </Link>

        {/* Search Bar (Desktop only) */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full bg-gray-50">
          <input
            type="text"
            placeholder="Search jobs..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleSearch}
            className="py-1.5 w-40 bg-transparent outline-none placeholder-gray-500"
          />
          <button
            onClick={() => input.trim() && navigate("/all-jobs")}
            className="p-1 hover:bg-gray-100 rounded"
            aria-label="Search"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-500"
            >
              <path
                d="M10.836 10.615 15 14.695"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                clipRule="evenodd"
                d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* User / Login */}
        {user ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="focus:outline-none"
            >
              <img
                src={`http://localhost:4000/uploads/${user.profile || assets.user_profile}`}
                alt="User profile"
                className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50">
                <p
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate("/my-application")}
                >
                  My Applications
                </p>
                <p
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </p>
                <p
                  className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer px-6 py-2 bg-primary hover:bg-primary/90 transition text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="sm:hidden"
      >
        {open ? (
          // Close Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Menu Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[64px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-start gap-4 px-5 text-sm sm:hidden">
          <Link to={"/"} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to={"/all-jobs"} onClick={() => setOpen(false)}>
            Jobs
          </Link>
          <Link to={"/about"} onClick={() => setOpen(false)}>
            About
          </Link>
          {user ? (
            <>
              <button
                onClick={() => {
                  navigate("/profile");
                  setOpen(false);
                }}
              >
                Profile
              </button>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setOpen(false);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary/90 transition text-white rounded-full text-sm"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
