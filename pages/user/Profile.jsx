import React from "react";
import { useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useEffect } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";


const Profile = () => {
  const { user ,axios ,setUser } = useContext(AppContext);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    education: "",
    experience: "",
    skills: "",
    about: "",
    profileImage: null,
    resume: null,
  });

  const [preview, setPreview] = useState({});
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setformData({ ...formData, [name]: files[0] });
    } else {
      setformData({ ...formData, [name]: value });
    }
  };
useEffect(() => {
    if (user) {
      setformData({
        name: user.name ,  
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
        education: user.education || "",
        experience: user.experience || "",
        skills: user.skills || "",
        about: user.about || "",
        resume: user.resume || null,
        profileImage: user.image || null,
      });
    }
}, [user]);

  useEffect(() => {
    if (formData.profileImage) {
      const imageUrl = URL.createObjectURL(formData.profileImage);
      setPreview(imageUrl);
    }
  }, [formData.profileImage]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try{
        const formPayload = new FormData();
        formPayload.append("name", formData.name);  
        formPayload.append("email", formData.email);
        formPayload.append("phone", formData.phone);
        formPayload.append("location", formData.location);
        formPayload.append("education", formData.education);
        formPayload.append("experience", formData.experience);
        formPayload.append("skills", formData.skills);
        formPayload.append("about", formData.about);
        formPayload.append("resume", formData.resume);
        formPayload.append("profileImage", formData.profileImage);

        const {data} = await axios.put(`http://localhost:4000/api/user/update-profile/${user._id}`, formPayload, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        if(data?.success){
            setUser(data.user);
            toast.success(data.message);
        }
    }catch(err){
        toast.error(err.response.data.message);
    }
  };

  return (
    <div className="text-w-3xl mx-auto mt-8 p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
          )}
        </div>

        {formData.profileImage && !preview && (
          <img
            src={`http://localhost:4000/uploads/${formData.profileImage}`}
            alt=""
            className="w-24 h-24 object-cover rounded-full mb-4"
        />
        )}

      <div>
        <label className="block mb-1 font font-semibold">Profile Image</label>
        <input type="file" name="profileImage" onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2 bg-gray-100"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">skills</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border rounded p-2"
            rows="2"
            placeholder="React,Node.js,Mongodb"
          ></textarea>
        </div>

        <div>
          <label className="">Resume (Pdf/Doc)</label>
          <input type="file" name="resume" onChange={handleChange} />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;


/*import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, axios, setUser } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    education: "",
    experience: "",
    skills: "",
    about: "",
    profileImage: null,
    resume: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Populate form when user data is available
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
        education: user.education || "",
        experience: user.experience || "",
        skills: user.skills || "",
        about: user.about || "",
        resume: user.resume || null,
        profileImage: user.profileImage || null, // backend filename
      });
    }
  }, [user]);

  // Update preview whenever profileImage changes
  useEffect(() => {
    if (formData.profileImage instanceof File) {
      // New file selected
      setPreview(URL.createObjectURL(formData.profileImage));
    } else if (formData.profileImage) {
      // Existing image from backend
      setPreview(`http://localhost:4000/uploads/${formData.profileImage}`);
    } else {
      setPreview(null);
    }
  }, [formData.profileImage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("location", formData.location);
      formPayload.append("education", formData.education);
      formPayload.append("experience", formData.experience);
      formPayload.append("skills", formData.skills);
      formPayload.append("about", formData.about);
      formPayload.append("resume", formData.resume);
      formPayload.append("profileImage", formData.profileImage);

      const { data } = await axios.put(
        "http://localhost:4000/api/user/updateprofile",
        formPayload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (data?.success) {
        setUser(data.user);
        toast.success(data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Profile update failed");
    }
  };

  return (
    <div className="text-w-3xl mx-auto mt-8 p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-24 h-24 object-cover rounded-full mb-4"
          />
        )}

        <div>
          <label className="block mb-1 font-semibold">Profile Image</label>
          <input type="file" name="profileImage" onChange={handleChange} />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2 bg-gray-100"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Skills</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border rounded p-2"
            rows="2"
            placeholder="React, Node.js, MongoDB"
          />
        </div>

        <div>
          <label>Resume (Pdf/Doc)</label>
          <input type="file" name="resume" onChange={handleChange} />
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;*/

