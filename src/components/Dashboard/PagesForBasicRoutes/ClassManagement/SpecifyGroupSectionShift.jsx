import Button from "@/components/Shared/Button";
import React from "react";

const SpecifyGroupSectionShift = () => {
  return (
    <div className="p-5 bg-white border rounded-lg shadow-lg min-h-[450px]">
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
        <Button text={'Search'}></Button>
      </div>
    </div>
  );
};

export default SpecifyGroupSectionShift;
