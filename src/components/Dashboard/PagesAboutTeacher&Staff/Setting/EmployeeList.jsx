"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";

const EmployeeList = () => {
  const modalRef1 = useRef(null);
  const { register, handleSubmit } = useForm();

  // Sample data to populate the table
  const employees = [
    {
      id: "0001",
      name: "মাওলানা জয়নুল আবেদীন দা বা",
      mobile: "01712019462",
      designation: "মুহতামিম ও শাইখুল হাদিস",
      empType: "Teacher",
      salary: "0",
      bankAcc: "",
      image: "",
    },
    {
      id: "0002",
      name: "মাওলানা ফরিদুদ্দীন মাসউদ",
      mobile: "01763901782",
      designation: "মুহাদ্দিস ও নায়েবে মুহতামিম",
      empType: "Teacher",
      salary: "18900",
      bankAcc: "",
      image: "",
    },
    {
      id: "0003",
      name: "মাওলানা আবু বকর সিদ্দিক",
      mobile: "01752667823",
      designation: "মুহাদ্দিস ও মক্তব বিভাগীয় প্রধান",
      empType: "Teacher",
      salary: "12500",
      bankAcc: "",
      image: "",
    },
    {
      id: "0004",
      name: "মুফতি আবুল হাসান",
      mobile: "01767946266",
      designation: "মুহাদ্দিস ও নাযিমে মাদ্রাসা",
      empType: "Teacher",
      salary: "18600",
      bankAcc: "",
      image: "",
    },
    {
      id: "0005",
      name: "মুফতি মাহফুজ আবেদীন",
      mobile: "01755404914",
      designation: "মুহাদ্দিস ও নাযিমে দারুল ইকামা",
      empType: "Teacher",
      salary: "17000",
      bankAcc: "",
      image: "",
    },
    {
      id: "0005",
      name: "মুফতি আবু রায়হান মাহফুজ",
      mobile: "01755404914",
      designation: "মুহাদ্দিস",
      empType: "Teacher",
      salary: "15000",
      bankAcc: "",
      image: "",
    },
  ];

  // ! handle Update
  const handleUpdate = () => {
    modalRef1.current.showModal();
  };

  // ! confirm Update
  const onSubmit = (data) => {
    console.log(data);

    Swal.fire({
      title: "Updated",
      text: "User has been updated.",
      icon: "success",
    });
    modalRef1.current.close();
  };

  return (
    <>
      <div className="bg-slate-50 mt-10 md:mt-8 p-3 pb-4 rounded-lg min-h-10 shadow-sm ">
        <div className=" overflow-x-scroll">
          <table className="table-auto  w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Edit</th>
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Mobile No.</th>
                <th className="border p-2">Designation</th>
                <th className="border p-2">Emp. Type</th>
                <th className="border p-2">Salary</th>
                <th className="border p-2">Bank Acc. No.</th>
                <th className="border p-2">Image</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="text-center">
                  <td className="border p-2 text-blue-500 cursor-pointer">
                    <button
                      onClick={handleUpdate}
                      className="p-3 border border-black rounded-full hover:bg-[#0098A8] hover:text-white hover:border-white transition-all duration-200"
                    >
                      <CiEdit className="text-xl"></CiEdit>
                    </button>
                  </td>
                  <td className="border p-2">{employee.id}</td>
                  <td className="border p-2">{employee.name}</td>
                  <td className="border p-2">{employee.mobile}</td>
                  <td className="border p-2">{employee.designation}</td>
                  <td className="border p-2">{employee.empType}</td>
                  <td className="border p-2">{employee.salary}</td>
                  <td className="border p-2">{employee.bankAcc}</td>
                  <td className="border p-2">
                    <Image
                      src={"/final-profile.jpg"}
                      alt="Employee image"
                      width={50}
                      height={50}
                    ></Image>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* modal */}
      <dialog id="my_modal_4" className="modal md:ml-[120px]" ref={modalRef1}>
        <div className="modal-box max-w-md">
          <h1 className="text-xl text-[#1E2865] text-center font-medium">
            Change Role And Status
          </h1>
          <form className="px-6" onSubmit={handleSubmit(onSubmit)}>
            {/* row 1 */}
            <div className="">
              <div className="mb-3">
                <label className="text-xs font-semibold px-1">Role</label>
                <div className="flex flex-col relative">
                  <input
                    type="text"
                    className="w-full py-2 px-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    {...register("role")}
                  />
                  <p className="text-xs font-semibold ml-1 text-[#1e5744]">
                    Please click on the field After Change
                  </p>
                  <div className="absolute right-2 top-[4px] text-xl">
                    <span className="p-[6px] bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] rounded-md text-xs text-white cursor-pointer">
                      {" "}
                      Change{" "}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="text-xs font-semibold px-1">Status</label>
                <div className="flex flex-col relative">
                  <input
                    type="text"
                    className="w-full py-2 px-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    {...register("status")}
                  />
                  <p className="text-xs font-semibold ml-1 text-[#1e5744]">
                    Please click on the field After Change
                  </p>
                  <div className="absolute right-2 top-[4px] text-xl">
                    <span className="p-[6px] bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] rounded-md text-xs text-white cursor-pointer">
                      {" "}
                      Change{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-around gap-4 mt-8">
              <div className="flex justify-center">
                <button className=" text-xl text-white relative px-7 md:px-10 py-2 font-semibold group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] group-hover:bg-gradient-to-r hover:from-[#31EDAF] hover:to-[#24BAD2] group-hover:-skew-x-[18deg]"></span>

                  <span className="flex items-center justify-center gap-2 relative">
                    <span className="">Save</span>{" "}
                  </span>
                </button>
              </div>
              <div className="">
                <form method="dialog" className="flex justify-center">
                  {/* if there is a button, it will close the modal */}
                  <button className="  text-xl text-white relative px-7 md:px-10 py-2 font-semibold group">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] group-hover:bg-gradient-to-r hover:from-[#31EDAF] hover:to-[#24BAD2] group-hover:-skew-x-[18deg]"></span>

                    <span className="flex items-center justify-center gap-2 relative">
                      <span className="">close</span>{" "}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default EmployeeList;
