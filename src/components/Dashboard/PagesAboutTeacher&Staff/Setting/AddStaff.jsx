import Button from "@/components/Shared/Button";

const AddStaff = () => {
  return (
    <div className="bg-white mt-6 md:mx-5 md:my-5 p-5 rounded-lg min-h-10 shadow-sm">
      <h1 className="text-2xl font-bold mb-6">Add Staff </h1>
      <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name*
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name*
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Father's Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fathers Name
          </label>
          <input
            type="text"
            placeholder="Enter Father's Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Designation */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Designation*
          </label>
          <input
            type="text"
            placeholder="Enter Designation"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number*
          </label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <div className="flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm">
            <input type="radio" name="gender" value="Male" className="mr-2" />
            <label className="mr-4">Male</label>
            <input type="radio" name="gender" value="Female" className="mr-2" />
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
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="text"
            placeholder="dd/mm/yyyy"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Religion */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Religion
          </label>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="Islam">Islam</option>
            <option value="Hinduism">Hinduism</option>
            <option value="Christianity">Christianity</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Nationality */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nationality
          </label>
          <input
            type="text"
            defaultValue="Bangladeshi"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            placeholder="Enter City"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            placeholder="Enter State"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Postal Code
          </label>
          <input
            type="text"
            placeholder="Enter Postal Code"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            placeholder="Enter Postal Code"
            className="mt-1 block w-full px-3 py-[6px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* job type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Type
          </label>
          <div className="flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm">
            <input
              type="radio"
              name="gender"
              value="Permanent"
              className="mr-2"
            />
            <label className="mr-4">Permanent</label>
            <input
              type="radio"
              name="gender"
              value="Temporary"
              className="mr-2"
            />
            <label>Temporary</label>
          </div>
        </div>

        {/* total salary */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Total salary
          </label>
          <input
            type="text"
            placeholder="Enter Total salary"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Abs Deduction */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Abs Deduction
          </label>
          <div className="flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm">
            <input type="radio" name="gender" value="yes" className="mr-2" />
            <label className="mr-4">Yes</label>
            <input type="radio" name="gender" value="no" className="mr-2" />
            <label>No</label>
          </div>
        </div>
        {/* Late Count As Abs */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Late Count As Abs
          </label>
          <div className="flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm">
            <input type="radio" name="gender" value="yes" className="mr-2" />
            <label className="mr-4">Yes</label>
            <input type="radio" name="gender" value="no" className="mr-2" />
            <label>No</label>
          </div>
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            placeholder="Enter Address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <Button text={"Save & Next"} />
        </div>
      </form>
    </div>
  );
};

export default AddStaff;
