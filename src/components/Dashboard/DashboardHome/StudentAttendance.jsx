import React from "react";
import { MdNotifications } from "react-icons/md";

const StudentAttendance = () => {
  const attendanceData = [
    { label: "Pre", count: 1122, color: "bg-[#0098A8]" },
    { label: "Abs", count: 156, color: "bg-red-600" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4 w-full mx-auto">
      <div className="flex justify-between items-center bg-purple-600 text-white p-2 rounded-t-lg">
        <h3 className="font-semibold flex items-center">
          <span className="material-icons mr-1">
            <MdNotifications></MdNotifications>
          </span>
          Student Attendance
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
              style={{ minWidth: "40px", textAlign: "center" }}
            >
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentAttendance;
