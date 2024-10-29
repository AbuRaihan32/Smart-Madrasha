import Button from "@/components/Shared/Button";
import React from "react";
import { FaPlus } from "react-icons/fa";

const AddClassGroupSectionShift = () => {
  return (
    <div>
      <div className="bg-white mt-10 md:mx-5 md:my-5 p-5 rounded-lg min-h-10 shadow-sm ">
        <div className="flex ">
          <form className="">
            <select className="border-2 outline-1 outline-[#0098A8]  rounded w-36 sm:w-56 p-3 mr-5 ">
              <option value="">Select Class</option>
              <option value="">নাজেরা</option>
              <option value="">খুসুসী</option>
              <option value="">মিজান</option>
              <option value=""> কায়দা</option>
              <option value="">মিশকাত</option>
              <option value=""> তাকমীল </option>
            </select>
          </form>
          <button className="">
            <div className="flex items-center gap-2 p-2 sm:px-5 bg-[#0098A8] hover:bg-[#23757e] rounded-md text-white btn">
              <FaPlus className="bg-white text-black p-[1px] rounded-full"></FaPlus>
              <p>
                Add <span className="hidden sm:inline">New</span> Class
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* main content */}
      <div className="bg-white mt-10 md:mx-5 md:my-5 p-5 rounded-lg min-h-10 shadow-sm ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 border rounded-lg shadow-lg">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Group Name"
              className="border-b p-3 outline-0 w-full mb-3"
            />
            <Button text={"Add Group"}></Button>
          </div>
          <div className="p-5 border rounded-lg shadow-lg">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Section Name"
              className="border-b p-3 outline-0 w-full mb-3"
            />
            <Button text={"Add Section"}></Button>
          </div>
          <div className="p-5 border rounded-lg shadow-lg">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Shift Name"
              className="border-b p-3 outline-0 w-full mb-3"
            />
            <Button text={"Add Shift"}></Button>
          </div>
          <div className="p-5 border rounded-lg shadow-lg">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Class Name"
              className="border-b p-3 outline-0 w-full mb-3"
            />
            <Button text={"Add Class"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClassGroupSectionShift;
