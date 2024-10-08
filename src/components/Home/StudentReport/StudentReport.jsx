import { RiCheckboxCircleFill } from "react-icons/ri";
import { GrDocumentUser } from "react-icons/gr";
import LottieFile from "@/components/Shared/LottieFile";
import Report from "../../../../public/Report.json";

const StudentReport = () => {
  return (
    <section className="bg-slate-50 pb-10 sm:pb-0 px-5 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className=" w-[94%] mx-auto flex items-center flex-col sm:flex-row-reverse">
          <div className="w-full">
            <div className="w-[80%] mx-auto">
            <LottieFile data={Report}></LottieFile>
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-[#0098A8] text-2xl font-bold flex items-center">
              <span className="mr-2">
                <GrDocumentUser></GrDocumentUser>
              </span>{" "}
              Student Report
            </h2>

            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 bg-white shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
                <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
                <span> Attendance Activities</span>
              </li>
              <li className="flex items-center gap-2 bg-white shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
                <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
                <span> Exam Report</span>
              </li>
              <li className="flex items-center gap-2 bg-white shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
                <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
                <span>Accounts Activities</span>
              </li>
              <li className="flex items-center gap-2 bg-white shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
                <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
                <span> Reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentReport;
