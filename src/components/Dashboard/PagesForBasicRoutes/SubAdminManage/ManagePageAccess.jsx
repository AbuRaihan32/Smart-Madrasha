import React from "react";

const ManagePageAccess = () => {
  const data = [
    {
      category: "Basic Settings",
      subCategory: "Class Management",
      pages: [
        "Add Subjects",
        "Assigning in Class",
        "Manage Session",
        "Institute Info",
        "Academic Calendar",
        "Add Class Group Section Shift",
        "Specify Group Section Shift for Class",
      ],
    },
    {
      category: "Basic Settings",
      subCategory: "Sub Admin Management",
      pages: ["Manage Page Access", "Create Sub Admin", "Active/Deactivate"],
    },
    {
      category: "Teacher & Staff",
      subCategory: "Settings",
      pages: [
        "Add Teacher",
        "Active/Deactivate Teacher",
        "Teacher-Subject Assign",
        "Add Staff",
        "Employee List",
        "Employee ID Card",
        "Staff & Sub Salary",
        "Salary Sheet",
        "Allowance",
        "Deduction",
      ],
    },
    {
      category: "Teacher & Staff",
      subCategory: "Accounts",
      pages: [
        "Pay Order Monthly",
        "Salary Payment",
        "Multiple Admission",
        "Add New Student",
        "Single Admission",
        "Online Admission Form",
        "Add Certificate",
      ],
    },
    {
      category: "Student Management",
      subCategory: "Student Info",
      pages: [
        "T.C.",
        "Change Class",
        "Change Information",
        "Student Details",
        "ID Cards",
        "Find Students",
        "Change Roll No, Group, Section Shift",
        "Manage Subject",
        "Change Subject",
        "Change Section Shift/Group",
      ],
    },
    {
      category: "Student Management",
      subCategory: "Login Management",
      pages: ["Block/Unblock/Login/Active"],
    },
    {
      category: "Attendances",
      subCategory: "Attendance",
      pages: [
        "Attendance Schedule",
        "Attendance Settings",
        "Attendance List Generator",
        "Scheduling RFID",
        "Manual Attendance",
        "Attendance Records",
        "Scheduling RFID",
      ],
    },
    {
      category: "Attendances",
      subCategory: "Student",
      pages: ["Manual Attendance", "Attendance Records"],
    },
    {
      category: "Attendances",
      subCategory: "Employee",
      pages: [
        "Manual Attendance",
        "Attendance Records",
        "Change Pay Order Date",
        "Account Management",
        "Money History Check",
      ],
    },
    {
      category: "Accounts",
      subCategory: "Settings",
      pages: [
        "Assign Payment Roles",
        "Pay Order",
        "Remote Pay Order",
        "Unpaid Money Report",
        "Payment Collection by Date",
      ],
    },
    {
      category: "Accounts",
      subCategory: "Income",
      pages: [
        "Payment Collection",
        "Payment Registration",
        "Fee Permission",
        "Bank Expense",
        "Expense",
      ],
    },
    {
      category: "Accounts",
      subCategory: "Expense",
      pages: [
        "Current Due",
        "Account History",
        "Account Links",
        "Student Fee Details",
        "Student Payment",
        "Account Summary",
      ],
    },
    {
      category: "Accounts",
      subCategory: "All Session Report",
      pages: [
        "Income Report",
        "Expense Report",
        "Payment Report",
        "My Account",
        "Bank Report",
        "Fee Based Report",
        "Due Report",
        "Paid Report",
        "Concession Report",
        "Student Based Report",
      ],
    },
    {
      category: "Exam",
      subCategory: "Exam Settings",
      pages: [
        "Setup Exam",
        "Exam Name",
        "Exam Class Name",
        "Grading System",
        "Marks Distribution",
        "Import Exam Marks",
        "Result Control",
        "Change Pass Marks",
        "Marks Paper Report",
      ],
    },
    {
      category: "Exam",
      subCategory: "Individual Exam",
      pages: [
        "Individual Result (Bangla)",
        "Individual Result",
        "Position Result",
        "Position Per Subject",
        "Position Per Exam",
        "Double Result",
      ],
    },
    {
      category: "Exam",
      subCategory: "Cumulative Exam",
      pages: [
        "Publish Result",
        "Cumulative Result",
        "Cumulative Position",
        "Upload Marks",
        "Result Status",
      ],
    },
    {
      category: "Exam",
      subCategory: "Weekly Exam",
      pages: ["Weekly Exam Marks", "Results"],
    },
    {
      category: "SMS",
      subCategory: "SMS Records",
      pages: ["Send SMS", "Send SMS from Contact List"],
    },
    {
      category: "Routines",
      subCategory: "Routine Settings",
      pages: [
        "Create Routine",
        "Assign Routine",
        "Modify Routine",
        "Delete Routine",
        "Class Routine",
      ],
    },
    {
      category: "Committee",
      subCategory: "Donation Management",
      pages: [
        "Add Donation",
        "Add Donation Category",
        "Collect Donation",
        "Donation Records",
        "Payment Record",
        "Unpaid Receipt",
      ],
    },
    {
      category: "SKIKHALOY INVOICE",
      subCategory: "Invoice Management",
      pages: ["Paid Invoice", "Unpaid Invoice"],
    },
  ];

  return (
    <>
      <div className="bg-slate-50 mt-10 md:mx-5 md:my-5 p-5 pb-4 rounded-lg min-h-10 shadow-sm ">
        <div className=" ">
          <form className="">
            <select className="border-2 outline-1 outline-[#0098A8]  rounded w-40 sm:w-64 p-3 mr-5 ">
              <option value=""> Select Sub Admin </option>
              <option value="">নাজেরা</option>
              <option value="">খুসুসী</option>
              <option value="">মিজান</option>
              <option value=""> কায়দা</option>
              <option value="">মিশকাত</option>
              <option value=""> তাকমীল </option>
            </select>
          </form>
          <p className="text-xs text-gray-500 mt-1">Add more or remove access pages for sub-admin</p>
        </div>
      </div>

      <div className="bg-slate-50 md:mx-5 mt-5 sm:md:my-5 p-5 rounded-lg min-h-10 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Sub Category</th>
                <th className="px-4 py-2 text-left">
                  Page Title (Allow Selected Pages)
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="">
                  <td className="px-4 py-2 border">{item.category}</td>
                  <td className="px-4 py-2 border">{item.subCategory}</td>
                  <td className="px-4 py-2 border">
                    {item.pages.map((page, i) => (
                      <div key={i} className="flex items-center mb-2">
                        <input type="checkbox" className="mr-2" />
                        <span>{page}</span>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-right">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default ManagePageAccess;
