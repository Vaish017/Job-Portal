import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllJobs from "./pages/AllJobs";
import JobDetails from "./pages/JobDetails";
import About from "./pages/About";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Myapplication from "./pages/user/Myapplication";
import Profile from "./pages/user/Profile";
import EmployerLayout from "./pages/employer/EmployerLayout";
import CompaniesList from "./pages/employer/CompaniesList";
import AddCompany from "./pages/employer/AddCompany";
import PostJob from "./pages/employer/PostJob";
import Joblist from "./pages/employer/Joblist";
import Applicants from "./pages/employer/Applicants";
import AddCategory from "./pages/admin/AddCategory";
import CategoriesList from "./pages/admin/CategoriesList";
import AdminLayout from "./pages/admin/AdminLayout";
import Allapplicants from "./pages/admin/Allapplicants";
import AllUsers from "./pages/admin/AllUsers";
import AllCompanies from "./pages/admin/AllCompanies";
import AllJob from "./pages/admin/AllJob";

const App = () => {
  const adminPath = useLocation().pathname.includes("admin");
  const employerPath = useLocation().pathname.includes("employer");

  return (
    <div classname="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-7xl mx-auto px-4">
      {adminPath || employerPath ? null : <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/all-jobs" element={<AllJobs />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* User Routes */}
        <Route path="/my-application" element={<Myapplication />} />
        <Route path="/profile" element={<Profile />} />

        {/* Employer Routes */}
        <Route path="/employer" element={<EmployerLayout />}>
          <Route index element={<CompaniesList />} />
          <Route path="add-company" element={<AddCompany />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="job-list" element={<Joblist />} />
          <Route path="applicants" element={<Applicants />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<CategoriesList />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="all-companies" element={<AllCompanies />} />
          <Route path="all-applicants" element={<Allapplicants />} />
          <Route path="all-users" element={<AllUsers />} />
          <Route path="all-job" element={<AllJob />} />
        </Route>
      </Routes>

      {adminPath || employerPath ? null : <Footer />}
      <Toaster />
    </div>
  );
};

export default App;
