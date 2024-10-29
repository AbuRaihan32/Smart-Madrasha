import React from "react";

const InstitutionInfoForm = () => {
  return (
    <div className="my-3">
      <div className="max-w-5xl mx-auto bg-white p-3 md:p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Institution Information</h2>
        <form className=" md:grid grid-cols-1 md:grid-cols-2 gap-3 space-y-2 md:space-y-0">
          {/* Institution Name */}
          <div>
            <label htmlFor="institutionName" className="block mb-2 font-medium">
              Institution Name
            </label>
            <input
              type="text"
              id="institutionName"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Institution Name"
            />
          </div>

          {/* Institution Dialog */}
          <div>
            <label
              htmlFor="institutionDialog"
              className="block mb-2 font-medium"
            >
              Institution Dialog
            </label>
            <input
              type="text"
              id="institutionDialog"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Institution Dialog"
            />
          </div>

          {/* Established */}
          <div>
            <label htmlFor="established" className="block mb-2 font-medium">
              Established
            </label>
            <input
              type="text"
              id="established"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="2015"
            />
          </div>

          {/* Principal */}
          <div>
            <label htmlFor="principal" className="block mb-2 font-medium">
              Principal
            </label>
            <input
              type="text"
              id="principal"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Principal Name"
            />
          </div>

          {/* Academic Staff */}
          <div>
            <label htmlFor="staff" className="block mb-2 font-medium">
              Academic Staff
            </label>
            <input
              type="text"
              id="staff"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="75"
            />
          </div>

          {/* Students */}
          <div>
            <label htmlFor="students" className="block mb-2 font-medium">
              Students
            </label>
            <input
              type="text"
              id="students"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="1400"
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block mb-2 font-medium">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Address"
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block mb-2 font-medium">
              City
            </label>
            <input
              type="text"
              id="city"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="City"
            />
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="block mb-2 font-medium">
              State
            </label>
            <input
              type="text"
              id="state"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="State"
            />
          </div>

          {/* Postal Code */}
          <div>
            <label htmlFor="postalCode" className="block mb-2 font-medium">
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Postal Code"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block mb-2 font-medium">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Phone Number"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Email"
            />
          </div>

          {/* Website */}
          <div>
            <label htmlFor="website" className="block mb-2 font-medium">
              Website
            </label>
            <input
              type="url"
              id="website"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Website URL"
            />
          </div>

          {/* Logo */}
          <div>
            <label htmlFor="logo" className="block mb-2 font-medium">
              Logo
            </label>
            <input
              type="file"
              id="logo"
              className="w-full p-[5px] border border-gray-300 rounded"
            />
          </div>

          {/* Buttons */}
          <div className="col-span-2 flex justify-end gap-4">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#0098A8] text-white px-4 py-2 rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InstitutionInfoForm;
