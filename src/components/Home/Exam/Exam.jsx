import { MdOutlineMenuBook } from "react-icons/md";
import { RiCheckboxCircleFill } from "react-icons/ri";
import exam from "../../../assets/Exam.json";
import LottieFile from "@/components/Shared/LottieFile";

const Exam = () => {
  return (
    <section className="bg-slate-50 py-5 px-5 md:px-0">
      <div className="max-w-6xl mx-auto py-8">
        <div className=" w-[94%] mx-auto flex items-center flex-col  sm:flex-row-reverse">
          <div className="w-full">
            <LottieFile data={exam}></LottieFile>
          </div>

          <div className="w-full">
            <h2 className="text-[#0098A8] text-2xl font-bold flex items-center">
              <span className="mr-2">
                <MdOutlineMenuBook></MdOutlineMenuBook>
              </span>{" "}
              Exam Management
            </h2>

            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 bg-white shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
                <RiCheckboxCircleFill ></RiCheckboxCircleFill>{" "}
                <span> Flexible Setting</span>
              </li>
              <li className="flex items-center gap-2 bg-white shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
                <RiCheckboxCircleFill ></RiCheckboxCircleFill>{" "}
                <span> Easy to Modify</span>
              </li>
              <li className="flex items-center gap-2 bg-white shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
                <RiCheckboxCircleFill ></RiCheckboxCircleFill>{" "}
                <span> Result By SMS</span>
              </li>
              <li className="flex items-center gap-2 bg-white shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
                <RiCheckboxCircleFill ></RiCheckboxCircleFill>{" "}
                <span> Smart Result Card</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exam;
