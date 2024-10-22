import Button from "@/components/Shared/Button";

const AddTeacher = () => {
  return (
    <div className="bg-white mt-6 md:mx-5 md:my-5 p-5 rounded-lg min-h-10 shadow-sm">
      <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name*</label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name*</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Father's Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Fathers Name</label>
          <input
            type="text"
            placeholder="Enter Father's Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Designation */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Designation*</label>
          <input
            type="text"
            placeholder="Enter Designation"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number*</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <div className="flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm">
            <input
              type="radio"
              name="gender"
              value="Male"
              className="mr-2"
            />
            <label className="mr-4">Male</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              className="mr-2"
            />
            <label>Female</label>
          </div>
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            placeholder="Enter Age"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="text"
            placeholder="dd/mm/yyyy"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Religion */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Religion</label>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="Islam">Islam</option>
            <option value="Hinduism">Hinduism</option>
            <option value="Christianity">Christianity</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Nationality */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Nationality</label>
          <input
            type="text"
            defaultValue="Bangladeshi"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            placeholder="Enter Address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            placeholder="Enter City"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            placeholder="Enter State"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input
            type="text"
            placeholder="Enter Postal Code"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <Button text={"Save & Next"} />
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
