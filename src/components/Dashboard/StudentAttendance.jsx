import { useEffect, useState } from "react";

const data = {
  pre: 819,
  abs: 76,
};

const StudentAttendance = () => {
  const [attendanceData, setAttendanceData] = useState({
    pre: 819,
    abs: 76,
  });

  useEffect(() => {
    setAttendanceData(data);
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <h3 className="font-semibold">Student Attendance Today</h3>
      <ul className="mt-4">
        <li>Present: {attendanceData.pre}</li>
        <li>Absent: {attendanceData.abs}</li>
      </ul>
    </div>
  );
};

export default StudentAttendance;
