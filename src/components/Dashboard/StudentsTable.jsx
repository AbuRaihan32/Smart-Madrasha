"use client";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const StudentTable = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch the student data securely using Axios
  const fetchStudents = async () => {
    const response = await axiosSecure.get("/api/students");
    return response.data;
  };

  // Use React Query's useQuery hook to fetch and manage data
  const {
    data: studentData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["students"],
    queryFn: fetchStudents,
  });

  // Handle loading state
  if (isLoading) {
    return <p>Loading student data...</p>;
  }

  // Handle error state
  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  // Handle empty data state
  if (!studentData?.classes.length) {
    return <p>No students found for the current session.</p>;
  }

  // Render the table
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center bg-green-600 text-white p-2 rounded-t-lg">
        <h3 className="font-semibold">Old & New Students of Current Session</h3>
        <span>Total Students: {studentData?.total_students}</span>
      </div>
      <table className="w-full mt-4">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="p-2">Class</th>
            <th className="p-2">New Student</th>
            <th className="p-2">Old Student</th>
            <th className="p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {studentData?.classes.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{item.class}</td>
              <td className="p-2">{item.newStudent}</td>
              <td className="p-2">{item.oldStudent}</td>
              <td className="p-2">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
