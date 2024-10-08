'use client'
import { useEffect, useState } from "react";

const data = {
  pre: 48,
  lateAbs: 16,
  late: 12,
  abs: 0,
};
const EmployeeAttendance = () => {
  const [attendanceData, setAttendanceData] = useState({
    pre: 0,
    lateAbs: 0,
    late: 0,
    abs: 0,
  });

  useEffect(() => {
    setAttendanceData(data);
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <h3 className="font-semibold">Employee Attendance Today</h3>
      <ul className="mt-4">
        <li>Present: {attendanceData.pre}</li>
        <li>Late Absences: {attendanceData.lateAbs}</li>
        <li>Late: {attendanceData.late}</li>
        <li>Absentees: {attendanceData.abs}</li>
      </ul>
    </div>
  );
};

export default EmployeeAttendance;
