import Button from "@/components/Shared/Button";
import React from "react";

const ActiveDeActiveTeacher = () => {
  const data = [
    {
      ID: "0001",
      Name: "মাওলানা জয়নুল আবেদিন দা বা",
      Designation: "মুসলিম ও শাইখুল হাদিস",
      Phone: "01712019462",
      Email: "joynul_abedin@gmail.com",
      UserName: "mqmm.joynulabedin",
      Password: "12345678",
      Approved: true,
      LockedOut: false,
      LastLogin: "9/27/2021 11:19:29 AM",
    },
    {
      ID: "0002",
      Name: "মাওলানা মসউদদিন মাসউদ",
      Designation: "মুসলিম ও মাতার মুসলিম",
      Phone: "01763901782",
      Email: "masud85abedin@gmail.com",
      UserName: "mqmm.masud",
      Password: "12345678",
      Approved: true,
      LockedOut: false,
      LastLogin: "9/27/2021 11:27:22 AM",
    },
    {
      ID: "0003",
      Name: "মাওলানা আবু বকর সিদ্দিক",
      Designation: "মুসলিম ও সহকারী বিভাগীয় প্রধান",
      Phone: "01752667823",
      Email: "siddik@gmail.com",
      UserName: "mqmm.siddik",
      Password: "12345678",
      Approved: true,
      LockedOut: false,
      LastLogin: "9/27/2021 11:36:26 AM",
    },
    {
      ID: "0011",
      Name: "মাওলানা আবু রায়হান মাহফুজ",
      Designation: "মুসলিম",
      Phone: "01703211587",
      Email: "abumahfuz3211@gmail.com",
      UserName: "mqmm.aburayhan",
      Password: "12345678",
      Approved: true,
      LockedOut: false,
      LastLogin: "10/23/2024 10:55:55 PM",
    },
    {
      ID: "0006",
      Name: "মাওলানা আলী আহমদ",
      Designation: "মুসলিম",
      Phone: "01775470120",
      Email: "ali_ahmad@gmail.com",
      UserName: "mqmm.ahmad",
      Password: "12345678",
      Approved: true,
      LockedOut: false,
      LastLogin: "9/27/2021 11:50:41 AM",
    },
    {
      ID: "0007",
      Name: "মাওলানা আবদুস সামাদ কাসেমী",
      Designation: "মুসলিম ও নান্নি সাহাবা ইনামিয়া (বালক শাখা)",
      Phone: "01723791876",
      Email: "abdussamadqasem71@gmail.com",
      UserName: "mqmm.a.samad",
      Password: "12345678",
      Approved: true,
      LockedOut: false,
      LastLogin: "9/27/2021 12:01:42 PM",
    },
    {
      ID: "0008",
      Name: "মাওলানা আবদুল রফিক ইমাম (বালিকা শাখা)",
      Designation: "মুসলিম ও সহকারী ইনাম (বালিকা)",
      Phone: "01755404914",
      Email: "rafiqmahi111@gmail.com",
      UserName: "mqmm.rafiq",
      Password: "12345678",
      Approved: true,
      LockedOut: false,
      LastLogin: "4/24/2022 8:15:20 AM",
    },
    {
      ID: "0009",
      Name: "মাওলানা আবদুল কাদের",
      Designation: "মুসলিম",
      Phone: "01689970998",
      Email: "abdulkaderjilane242@gmail.com",
      UserName: "mqmm.a.kader",
      Password: "12345678",
      Approved: true,
      LockedOut: false,
      LastLogin: "9/27/2021 12:39:07 PM",
    },
    {
      ID: "0006",
      Name: "মাওলানা মাহফুজ আবেদিন",
      Designation: "নায়েবে তাহাশীদ ও মুসলিম",
      Phone: "01722854652",
      Email: "mahfuzabedin@gmail.com",
      UserName: "mqmm.mahfuz",
      Password: "12345678",
      Approved: true,
      LockedOut: false,
      LastLogin: "9/27/2021 12:46:34 PM",
    },
    {
      ID: "E15",
      Name: "মুফতি সুলতান",
      Designation: "নাজমে শিক্ষক (প্রাথমিক)",
      Phone: "01743068063",
      Email: "abusufiancnt@gmail.com",
      UserName: "mqmm.sufian",
      Password: "12345678",
      Approved: true,
      LockedOut: false,
      LastLogin: "9/27/2021 12:48:14 PM",
    },
    {
      ID: "0009",
      Name: "মুফতি হজরত আলী",
      Designation: "মুসলিম ও শিক্ষার কুরআন",
      Phone: "01770512665",
      Email: "hazratali@gmail.com",
      UserName: "mqmm.hazratali",
      Password: "12345678",
      Approved: true,
      LockedOut: false,
      LastLogin: "9/27/2021 12:52:48 PM",
    },
    {
      ID: "0029",
      Name: "জনাব শাহ হাসান",
      Designation: "শিক্ষক ও হুজুরে রকিম",
      Phone: "01769424626",
      Email: "abuhasanmostofa@gmail.com",
      UserName: "mqmm.hasan",
      Password: "12345678",
      Approved: true,
      LockedOut: false,
      LastLogin: "9/27/2021 12:56:16 PM",
    },
    {
      ID: "E15",
      Name: "শায়খ শামসুল আমিন",
      Designation: "শিক্ষক ও সহকারী রকিম",
      Phone: "01716252955",
      Email: "smia0668@gmail.com",
      UserName: "mqmm.shahalom",
      Password: "12345678",
      Approved: true,
      LockedOut: false,
      LastLogin: "10/2/2021 9:50:22 AM",
    },
  ];

  return (
    <>
      <div className="bg-slate-50 mt-10 md:mt-8 p-3 pb-4 rounded-lg min-h-10 shadow-sm ">
        <div className="flex flex-col md:flex-row items-center space-x-3 space-y-3 md:space-y-0 text-[14px] sm:text-[16px]">
          <div>
            <input
              type="text"
              placeholder="Enter Search Keyword"
              className="px-3 py-3 border border-gray-300 rounded-md shadow-sm outline-none"
              name="search-Key"
              id=""
            />
          </div>
          <Button text={"Find"}></Button>
        </div>
      </div>

      <div className="bg-slate-50 mt-10 md:mx-0 md:mt-8 p-3 pb-4 rounded-lg min-h-10 shadow-sm ">
        <h1 className="text-sm text-end py-1 text-green-500">
          By checked or unchecked Approved (activate/Deactivate) teacher Login
          access
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full text-gray-800 text-center text-xs">
            <thead className="text-xs text-gray-800 font-bold uppercase bg-gray-100">
              <tr className="text-[10px] ">
                <th className="px-[2px]  py-3 border">
                  <input type="checkbox" name="" id="" /> <span>SMS</span>
                </th>
                <th className="px-[2px] border py-3">ID</th>
                <th className="px-[2px] border py-3">Name</th>
                <th className="px-[2px] border py-3">Designation</th>
                <th className="px-[2px] border py-3">Phone</th>
                <th className="px-[2px] border py-3">Email</th>
                <th className="px-[2px] border py-3">User Name</th>
                <th className="px-[2px] border py-3 text-[8px]">Password</th>
                <th className="px-[2px] border py-3 text-[8px]">Approved?</th>
                <th className="px-[2px] border py-3">Locked Out?</th>
                <th className="px-[2px] border py-3">Last Login</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-[2px] border py-4 ">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="px-[2px] border py-4 ">{row.ID}</td>
                  <td className="px-[2px] border py-4 ">{row.Name}</td>
                  <td className="px-[2px] border py-4">{row.Designation}</td>
                  <td className="px-[2px] border py-4">{row.Phone}</td>
                  <td className="px-[2px] border py-4">{row.Email}</td>
                  <td className="px-[2px] border py-4">{row.UserName}</td>
                  <td className="px-[2px] border py-4">{row.Password}</td>
                  <td className="px-[2px] border py-4">
                    {row.Approved ? (
                      <input type="checkbox" checked />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td className="px-[2px] border py-4">
                    {row.LockedOut ? (
                      <input type="checkbox" checked />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td className="px-[2px] border py-4">{row.LastLogin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ActiveDeActiveTeacher;
