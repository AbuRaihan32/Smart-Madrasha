"use client";
import React, { useState } from "react";

const PaidAndDueSalary = () => {
  const data = [
    {
      id: "0001",
      name: "মাওলানা আব্দুল আজিজ",
      Apr: 21900,
      May: 21900,
      Jun: 21900,
      Jul: 21900,
      Aug: 21900,
      Sep: 21900,
      Paid: 131400,
      Due: 0,
    },
    {
      id: "0002",
      name: "মাওলানা সাইদ মাসুদ",
      Apr: 14500,
      May: 14500,
      Jun: 14500,
      Jul: 14500,
      Aug: 14500,
      Sep: 14500,
      Paid: 87000,
      Due: 0,
    },
    {
      id: "0001",
      name: "মাওলানা আব্দুল আজিজ",
      Apr: 21900,
      May: 21900,
      Jun: 21900,
      Jul: 21900,
      Aug: 21900,
      Sep: 21900,
      Paid: 131400,
      Due: 0,
    },
    {
      id: "0002",
      name: "মাওলানা সাইদ মাসুদ",
      Apr: 14500,
      May: 14500,
      Jun: 14500,
      Jul: 14500,
      Aug: 14500,
      Sep: 14500,
      Paid: 87000,
      Due: 0,
    },
    {
      id: "0001",
      name: "মাওলানা আব্দুল আজিজ",
      Apr: 21900,
      May: 21900,
      Jun: 21900,
      Jul: 21900,
      Aug: 21900,
      Sep: 21900,
      Paid: 131400,
      Due: 0,
    },
    {
      id: "0002",
      name: "মাওলানা সাইদ মাসুদ",
      Apr: 14500,
      May: 14500,
      Jun: 14500,
      Jul: 14500,
      Aug: 14500,
      Sep: 14500,
      Paid: 87000,
      Due: 0,
    },
    {
      id: "0001",
      name: "মাওলানা আব্দুল আজিজ",
      Apr: 21900,
      May: 21900,
      Jun: 21900,
      Jul: 21900,
      Aug: 21900,
      Sep: 21900,
      Paid: 131400,
      Due: 0,
    },
    {
      id: "0002",
      name: "মাওলানা সাইদ মাসুদ",
      Apr: 14500,
      May: 14500,
      Jun: 14500,
      Jul: 14500,
      Aug: 14500,
      Sep: 14500,
      Paid: 87000,
      Due: 0,
    },
    // আরও ডাটা এখানে যোগ করুন
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="p-4">
      {/* Navigation */}
      <div className="flex justify-end gap-3 items-center mb-2">
        <button
          onClick={handleRefresh}
          className="p-2 bg-blue-500 text-white rounded"
        >
          🔄 Refresh
        </button>
        <div>
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="p-2 bg-gray-300 text-gray-700 rounded mr-2"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="p-2 bg-gray-300 text-gray-700 rounded ml-2"
          >
            Next
          </button>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <div className="min-w-full bg-white shadow-md rounded-lg">
          <table className="min-w-full text-xs md:text-sm lg:text-base">
            <thead>
              <tr className="bg-[#0098A8] text-white">
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Apr 2024</th>
                <th className="p-2 border">May 2024</th>
                <th className="p-2 border">Jun 2024</th>
                <th className="p-2 border">Jul 2024</th>
                <th className="p-2 border">Aug 2024</th>
                <th className="p-2 border">Sep 2024</th>
                <th className="p-2 border">Paid</th>
                <th className="p-2 border">Due</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((row, index) => (
                <tr
                  key={index}
                  className="text-center bg-white even:bg-gray-100"
                >
                  <td className="p-2 border">{row.id}</td>
                  <td className="p-2 border">{row.name}</td>
                  <td className="p-2 border">{row.Apr}</td>
                  <td className="p-2 border">{row.May}</td>
                  <td className="p-2 border">{row.Jun}</td>
                  <td className="p-2 border">{row.Jul}</td>
                  <td className="p-2 border">{row.Aug}</td>
                  <td className="p-2 border">{row.Sep}</td>
                  <td className="p-2 border">{row.Paid}</td>
                  <td className="p-2 border">{row.Due}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaidAndDueSalary;
