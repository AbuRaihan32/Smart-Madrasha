"use client";

import Button from "@/components/Shared/Button";
import { useState } from "react";

const PaidAndDueSalary = () => {
  const [payRole, setPayRole] = useState("");
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

  const handlePayRoleSubmitBtn = (e) => {
    e.preventDefault();
    setPayRole(e.target.payRole.value);
  };

  return (
    <div className="p-4">
      <div className="bg-slate-50 mt-10 md:mt-5 p-3 pb-4 rounded-lg min-h-10 shadow-sm ">
        <form onSubmit={handlePayRoleSubmitBtn} className="flex gap-5">
          <select
            name="payRole"
            id=""
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none"
          >
            <option value=""> Select Payment Role </option>
            <option value="মাসিক বেতন"> মাসিক বেতন </option>
          </select>

          <Button text={"Submit"}></Button>
        </form>
      </div>

      {/* Responsive Table */}
      {payRole && (
        <div className="overflow-x-auto bg-slate-50 mt-4 p-3 pb-4 rounded-lg min-h-10 shadow-sm ">
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
                {data.map((row, index) => (
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
      )}
    </div>
  );
};

export default PaidAndDueSalary;
