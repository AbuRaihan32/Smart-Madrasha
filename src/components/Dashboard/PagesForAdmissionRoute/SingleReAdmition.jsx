import Button from "@/components/Shared/Button";

const SingleReAdmition = () => {
  return (
    <div className="bg-white mt-6 md:mx-5 md:my-5 p-5 rounded-lg min-h-10 shadow-sm">
      <form>
        <div className="mb-4">
          <h2 className="text-[16px] sm:text-lg font-bold bg-slate-200 p-2 rounded-md">
            Student Information
            <span className="text-xs sm:text-sm bg-blue-700 ml-3 text-white p-1 rounded-md">Last Entry ID 181083</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <label>
              Student ID*
              <input
                type="text"
                placeholder="Student ID*"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label>
              SMS Mobile Number*
              <input
                type="text"
                placeholder="SMS Mobile Number*"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label>
              Students Name*
              <input
                type="text"
                placeholder="Students Name*"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label>
              Students Email
              <input
                type="email"
                placeholder="Students Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <div className="">
              <label className="mr-4">Gender*</label>
              <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="mr-2"
                />{" "}
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="ml-4 mr-2"
                />{" "}
                Female
              </div>
            </div>
            <label>
              Session Year*
              <input
                type="text"
                placeholder="Session Year*"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label>
              Date of Birth (dd/mm/yyyy)
              <input
                type="date"
                placeholder="Date of Birth (dd/mm/yyyy)"
                className="mt-1 block w-full px-3 py-[6px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label>
              Blood Group
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Blood Group</option>
                {/* Add more blood group options here */}
              </select>
            </label>
            <label>
              Religion
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Religion</option>
                <option>Islam</option>
                <option>Christianity</option>
                {/* Add more religion options here */}
              </select>
            </label>
            <label className="">
              Students Photo
              <input
                type="file"
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <label className="w-full">
              Students Permanent Address
              <textarea
                placeholder="Students Permanent Address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </label>
            <label className="w-full">
              Students Local Address
              <textarea
                placeholder="Students Local Address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </label>
          </div>
        </div>

        <div className="rounded mt-10">
          <h2 className="text-lg font-bold bg-blue-200  p-2 rounded-md">
            Parents Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <label>
              Fathers Name*
              <input
                type="text"
                placeholder="Fathers Name*"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label>
              Fathers Phone
              <input
                type="text"
                placeholder="Fathers Phone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label>
              Fathers Occupation
              <input
                type="text"
                placeholder="Fathers Occupation"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label>
              Mothers Name
              <input
                type="text"
                placeholder="Mothers Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label>
              Mothers Phone
              <input
                type="text"
                placeholder="Mothers Phone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label>
              Mothers Occupation
              <input
                type="text"
                placeholder="Mothers Occupation"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
        </div>

        <div className="rounded mt-10">
          <h2 className="text-[15px] sm:text-lg font-bold bg-green-100 p-2 rounded-md">
            Previous Institution Information (If Any)
          </h2>
          <div className="mt-4">
            <div className="flex gap-4 flex-col md:flex-row">
              <label className="w-full">
                Institution Name
                <input
                  type="text"
                  placeholder="Institution Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label className="w-full">
                Class
                <input
                  type="text"
                  placeholder="Class"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
              <label>
                Exam Year
                <input
                  type="text"
                  placeholder="Exam Year"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label>
                Grade
                <input
                  type="text"
                  placeholder="Grade"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label className="">
                Guardians Photo
                <input
                  type="file"
                  className="mt-1 block w-full px-3 py-[6px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
            </div>
          </div>
        </div>

        <div className=" rounded mt-10">
          <h2 className="text-[15px] sm:text-lg font-bold bg-gray-100 p-2 rounded-md">
            Second Guardian Information (Optional)
          </h2>
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                Guardian Name
                <input
                  type="text"
                  placeholder="Guardian Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label>
                Relationship
                <input
                  type="text"
                  placeholder="Relationship"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <label>
                Mobile No.
                <input
                  type="text"
                  placeholder="Mobile No."
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label>
                Occupation
                <input
                  type="text"
                  placeholder="Occupation"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label className="">
                Second Guardians Photo
                <input
                  type="file"
                  className="mt-1 block w-full px-3 py-[6px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
            </div>
            <label className="">
              Others Details
              <textarea
                placeholder="Others Details"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </label>
          </div>
        </div>

        <div className="mt-5">
          <Button text={"Save And Continue"}></Button>
        </div>
      </form>
    </div>
  );
};

export default SingleReAdmition;


