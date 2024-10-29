import React from "react";
import { MdNotifications } from "react-icons/md";

const EmployeeAttendance = () => {
  const attendanceData = [
    { label: "Pre", count: 48, color: "bg-[#0098A8]" },
    { label: "Late Abs", count: 16, color: "bg-orange-500" },
    { label: "Late", count: 4, color: "bg-orange-400" },
    { label: "Abs", count: 12, color: "bg-red-500" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4 ">
      <div className="flex justify-between items-center bg-teal-500 text-white p-2 rounded-t-lg">
        <h3 className="font-semibold flex items-center">
          <span className="material-icons mr-1">
            <MdNotifications></MdNotifications>
          </span>
          Employee Attendance
        </h3>
        <span>Today</span>
      </div>
      <div className="pt-4">
        {attendanceData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-t"
          >
            <span>{item.label}</span>
            <span
              className={`text-white px-2 py-1 rounded-full ${item.color}`}
              style={{ minWidth: "32px", textAlign: "center" }}
            >
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeAttendance;
