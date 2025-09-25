import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
const AllUsers = () => {
  const {axios ,admin} = useContext(AppContext);
  const [students, setStudents] = useState([]);

  const fetchAllStudents = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/user/all-students");

      if (data.success) {
        setStudents(data.students);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {

      fetchAllStudents();
  }, []);

  return (
  <div className="p-4">
    <h2 className="text-2xl font-medium text-gray-800">Student list</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
        <thead className="bg-gray-100 text-gray-700 text-left">
          <tr>
             <th className="py-2 px-4 ">Image</th>
            <th className="py-2 px-4 ">Name</th>
            <th className="py-2 px-4 ">Email</th>
            <th className="py-2 px-4 ">Phone</th>
            <th className="py-2 px-4 ">Location</th>
            <th className="py-2 px-4 ">Education</th>
            <th className="py-2 px-4 ">Experience</th>
            <th className="py-2 px-4 ">Skills</th>
            <th className="py-2 px-4 ">bio</th>
          
            <th className="py-2 px-4 ">Resume</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={student._id} className="border-t">
                <td className="px-4 py-2">
              
                    <img
                      src={`http://localhost:4000/uploads/${student.image}`}
                      alt=""></img>
                </td>
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.email}</td>
                <td className="px-4 py-2">{student.phone}</td>
                <td className="px-4 py-2">{student.location}</td>  
                <td className="px-4 py-2">{student.education}</td>
                <td className="px-4 py-2">{student.experience}</td>
                <td className="px-4 py-2">{student.skills}</td>
                <td className="px-4 py-2">{student.bio}</td>
               
                <td className="px-4 py-2">
                    <a
                      href={`http://localhost:4000/uploads/${student.resume}`}
                      alt=""></a>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default AllUsers;
