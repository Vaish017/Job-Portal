import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";


const Login = () => {
  const { navigate, setUser, setadmin, axios } = useContext(AppContext);
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/auth/login",
      formData
    );

    if (data.success) {
      if (data.user.role === "employer") {
        setUser(data.user);
        navigate("/employer");
        toast.success(data.message);
      } else if (data.user.role === "student") {
        setUser(data.user);
        navigate("/");
      } else {
        setadmin(true);
        navigate("/admin");
        toast.success(data.message);
    }
   }
   } catch (error) {
    toast.error(error.response.data.message);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Login Now
        </h2>
        <input
          className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <input
          className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        <button
          type="submit"
          className="w-full my-5 bg-primary hover:bg-indigo-600/90 active:scale-95 transition py-2.5 rounded-full text-white"
        >
          Log in
        </button>
        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Signup Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

