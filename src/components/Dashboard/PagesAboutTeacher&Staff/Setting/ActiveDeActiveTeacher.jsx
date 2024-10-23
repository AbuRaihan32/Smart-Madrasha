import React from "react";

const ActiveDeActiveTeacher = () => {
  const data = [
    {
      name: "আবু সুফিয়ান",
      designation: "শিক্ষক ও সিনিয়র অফিস সহকারী",
      phone: "01743060863",
      email: "abusufian.cmt@gmail.com",
      userName: "abu_sufian",
      validation: "Valid",
      approved: true,
      lockedOut: false,
      createDate: "9/27/2021 5:34:51 AM",
      lastLogin: "9/6/2022 10:15:22 AM",
      lastPasswordChange: "6/3/2022 12:00:07 PM",
    },
    {
      name: "শাহ আলম",
      designation: "বিষয় শিক্ষকমন্ডলী",
      phone: "01716252925",
      email: "shah.alam@gmail.com",
      userName: "mqmm_shahalam",
      validation: "Valid",
      approved: true,
      lockedOut: false,
      createDate: "9/28/2021 6:30:44 AM",
      lastLogin: "10/1/2024 2:10:28 PM",
      lastPasswordChange: "6/4/2022 2:14:50 PM",
    },
    {
      name: "আবুল হাসান",
      designation: "প্রধান শিক্ষক ও সিনিয়র অফিস সহকারী",
      phone: "01769426666",
      email: "abul_hasan@gmail.com",
      userName: "mqmm_abulhasan_admin",
      validation: "Valid",
      approved: true,
      lockedOut: false,
      createDate: "9/28/2021 6:47:34 AM",
      lastLogin: "6/11/2023 12:17:16 PM",
      lastPasswordChange: "6/1/2023 12:17:16 PM",
    },
    {
      name: "মাসুদ সাবেদিন",
      designation: "শিক্ষক ও সিনিয়র অফিস সহকারী",
      phone: "01763901782",
      email: "masud5sabedin@gmail.com",
      userName: "mqmm_masud_admin",
      validation: "Valid",
      approved: true,
      lockedOut: false,
      createDate: "9/28/2021 7:57:12 AM",
      lastLogin: "10/15/2023 7:29:26 AM",
      lastPasswordChange: "11/13/2022 5:35:50 PM",
    },
    {
      name: "মাওলানা জয়নুল আবেদিন",
      designation: "শিক্ষক ও সহকারী পরিচালক",
      phone: "01732301138740",
      email: "maulanajoynulabedin@gmail.com",
      userName: "mqmm_joynul_admin",
      validation: "Valid",
      approved: true,
      lockedOut: false,
      createDate: "9/28/2021 8:02:04 AM",
      lastLogin: "10/14/2022 1:07:07 PM",
      lastPasswordChange: "9/28/2021 8:02:04 AM",
    },
    {
      name: "মাওলানা রফিক আহমেদ",
      designation: "সহকারী অধ্যাপক ও হিসাব সহকারী",
      phone: "01712019462",
      email: "rafiqmahji111@gmail.com",
      userName: "mqmm_rafiq_admin",
      validation: "Valid",
      approved: true,
      lockedOut: false,
      createDate: "9/28/2021 8:46:40 AM",
      lastLogin: "12/13/2021 6:13:10 AM",
      lastPasswordChange: "9/29/2021 12:35:30 PM",
    },
    {
      name: "মাহমুদ হাসান",
      designation: "সহকারী শিক্ষক ও হিসাবরক্ষক",
      phone: "01966560299",
      email: "mahmud99abedin@gmail.com",
      userName: "mqmm_mahmudraf_admin",
      validation: "Valid",
      approved: true,
      lockedOut: false,
      createDate: "9/29/2021 6:51:35 AM",
      lastLogin: "12/17/2021 11:12:17 PM",
      lastPasswordChange: "10/1/2021 12:00:00 PM",
    },
    {
      name: "মাওলানা আবু মাহফুজ",
      designation: "শিক্ষক ও সহকারী অধ্যাপক",
      phone: "01702311587",
      email: "abumahfuz3211@gmail.com",
      userName: "mqmm_abu_mahfuz",
      validation: "Valid",
      approved: true,
      lockedOut: false,
      createDate: "10/1/2021 11:26:04 AM",
      lastLogin: "10/1/2024 2:14:06 AM",
      lastPasswordChange: "6/4/2022 12:14:50 PM",
    },
    {
      name: "মুফতি আবদুস সামাদ",
      designation: "প্রিন্সিপাল",
      phone: "",
      email: "jimgabdusamad@gmail.com",
      userName: "jimg_abdussamad",
      validation: "Valid",
      approved: true,
      lockedOut: false,
      createDate: "10/14/2021 1:00:07 PM",
      lastLogin: "4/3/2022 3:33:02 AM",
      lastPasswordChange: "10/14/2021 1:00:07 PM",
    },
    {
      name: "আবদুল কাদের জালাল",
      designation: "সহকারী শিক্ষক ও হিসাবরক্ষক",
      phone: "",
      email: "abdulqaderjalal@gmail.com",
      userName: "jimg_akader",
      validation: "Valid",
      approved: true,
      lockedOut: false,
      createDate: "10/16/2021 9:13:44 AM",
      lastLogin: "12/3/2022 1:24:33 AM",
      lastPasswordChange: "10/16/2021 9:13:44 AM",
    },
  ];

  return (
    <div className="bg-slate-50 mt-10 md:mx-0 md:mt-8 p-3 pb-4 rounded-lg min-h-10 shadow-sm ">
         <h1 className="text-2xl font-bold mb-6">Click On Approved to activate/Deactivate Sub-Admin Login access:</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-gray-800 text-center text-xs">
          <thead className="text-xs text-gray-800 font-bold uppercase bg-gray-100">
            <tr className="text-[10px]">
              <th className="px-[2px] border py-3">Name</th>
              <th className="px-[2px] border py-3">Designation</th>
              <th className="px-[2px] border py-3">Phone</th>
              <th className="px-[2px] border py-3">Email</th>
              <th className="px-[2px] border py-3">User Name</th>
              <th className="px-[2px] border py-3 text-[8px]">Validation</th>
              <th className="px-[2px] border py-3 text-[8px]">Approved?</th>
              <th className="px-[2px] border py-3">Locked Out?</th>
              <th className="px-[2px] border py-3">Create Date</th>
              <th className="px-[2px] border py-3">Last Login</th>
              <th className="px-[2px] border py-3">Last Password Change</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-[2px] border py-4 ">{row.name}</td>
                <td className="px-[2px] border py-4">{row.designation}</td>
                <td className="px-[2px] border py-4">{row.phone}</td>
                <td className="px-[2px] border py-4">{row.email}</td>
                <td className="px-[2px] border py-4">{row.userName}</td>
                <td className="px-[2px] border py-4">{row.validation}</td>
                <td className="px-[2px] border py-4">
                  {row.approved ? (
                    <input type="checkbox" checked disabled />
                  ) : (
                    <input type="checkbox" disabled />
                  )}
                </td>
                <td className="px-[2px] border py-4">
                  {row.lockedOut ? (
                    <input type="checkbox" checked disabled />
                  ) : (
                    <input type="checkbox" disabled />
                  )}
                </td>
                <td className="px-[2px] border py-4">{row.createDate}</td>
                <td className="px-[2px] border py-4">{row.lastLogin}</td>
                <td className="px-[2px] border py-4">{row.lastPasswordChange}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveDeActiveTeacher;
