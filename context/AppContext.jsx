import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { categories } from "../assets/assets";
import { jobs } from "../assets/assets";
import toast from "react-hot-toast";
import { companies } from "../assets/assets";
import { applicants } from "../assets/assets";
import axios from "axios";
axios.defaults.withCredentials = true;

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(false);
  const [admin, setadmin] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [jobsData, setJobData] = useState([]);
  const [query, setQuery] = useState("");
  const [isJobApplied, setIsJobApplied] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [applicantsData, setApplicantsData] = useState([]);

  // get logged in user
  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/user/me");
        console.log("data",data);
        if (data?.success) {
          setUser({
            ...data.user,
            profileImage: data.user.profileImage || null,
          });
        }
      } catch (error) {
          toast.error(error.response.data.message || "Error fetching user");
        }
      };
  
    fetchLoggedInUser();
  }, []);

  const logout = async () => {
    try {
      await axios.post("http://localhost:4000/api/auth/logout");
      setUser(false);
      navigate("/login");
      toast.success("Logged out successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed");
    }
  };

  const fetchApplicants = () => setApplicantsData(applicants);
  const fetchCompanies = () => setCompanyData(companies);
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/category/all");
      if (data.success) {
        setCategoriesData(data.categories);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const fetchJobs = () => setJobData(jobs);

  const saveJob = (jobs) => {
    setSavedJobs((prev) => {
      const exists = prev.find((item) => item._id === jobs._id);
      return exists ? prev : [...prev, jobs];
    });
    toast.success("Job saved successfully");
  };

  useEffect(() => {
    fetchJobs();
    fetchCompanies();
    fetchApplicants();
  }, []);
  useEffect(() => {
    fetchCategories();
  }, [categoriesData]);
  const value = {
    navigate,
    user,
    setUser,
    admin,
    setadmin,
    categoriesData,
    setCategoriesData,
    jobsData,
    query,
    setQuery,
    isJobApplied,
    setIsJobApplied,
    savedJobs,
    saveJob,
    companyData,
    setCompanyData,
    applicantsData,
    axios,
    
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

