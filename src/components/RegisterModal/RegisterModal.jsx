import { ModalWrapper, Reoverlay } from "reoverlay";
import "reoverlay/lib/ModalWrapper.css";
import Button from "../Shared/Button";

const RegisterModal = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    alert(`Logged in with Email : ${email} Password : ${password}`);
    Reoverlay.hideModal(); // for close modal
  };

  const closeModal = () => {
    Reoverlay.hideModal();
  };

  return (
    <ModalWrapper animation={"door"}>
      <div className="p-8 h-[calc(100vh-15vh)] bg-white rounded-lg shadow-lg overflow-y-scroll no-scrollbar">
        <div className="w-[90%] h-14 bg-[#0098A8] absolute -top-7  sm:right-[32px] flex items-center justify-center text-white">
          <div>
            <h1 className="text-2xl text-center text- font-bold">
              Register Now
            </h1>
            <button
              onClick={closeModal}
              className="absolute right-4 top-3 font-semibold hover:text-red-600"
            >
              ✕
            </button>
          </div>
        </div>
        <form onSubmit={handleRegister}>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label class="block text-gray-700">
                Institute Name <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="InstituteName"
                placeholder="Example: Our School"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-gray-700">
                Institute Name (In Bangla)
              </label>
              <input
                type="text"
                name="InstituteBangla"
                placeholder="মেমব্রু আমাদের বিদ্যালয়"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label class="block text-gray-700">Website Language</label>
              <select
                name="language"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Bengali</option>
                <option>English</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700">
                Institute Address <span class="text-red-500">*</span>
              </label>
              <input
                name="address"
                type="text"
                placeholder="Example: Road#4, Block-D, Dhanmondi, Dhaka"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label class="block text-gray-700">
                Contact Number <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="number"
                placeholder="Example: 01XXXXXXXXX"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-gray-700">
                Email Address <span class="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Example: test@test.com"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label class="block text-gray-700">Institute Type</label>
              <select
                name="InstituteType"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>English Medium School</option>
                <option>Bengali Medium School</option>
                <option>Madrasa</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700">Website Address</label>
              <div class="flex">
                <input
                  type="text"
                  name="webAddress"
                  placeholder="our-school"
                  class=" px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span class="bg-gray-200 py-2 rounded-r-md -ml-[100px] px-3">
                  .biddaloy.com
                </span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label class="block text-gray-700">
                Password <span class="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-gray-700">
                Confirm Password <span class="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="confirmPass"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label class="block text-gray-700">
                Number of Current Students
              </label>
              <input
                type="number"
                name="studentsNum"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-gray-700">Comment/Feedback</label>
              <textarea
                rows="2"
                name="feedback"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>

          <div class="flex justify-center">
            <Button text={"Add My Institute"}></Button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default RegisterModal;
