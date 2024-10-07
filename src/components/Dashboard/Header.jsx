import { IoMdCall } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";


const Header = () => {
  // TODO: get header data from database
  return (
    <header className=" w-5/6 bg-[#00A12A] p-5 flex justify-between fixed right-0 text-white overflow-y-auto">
      <div>
        <h2 className="text-2xl font-bold">
          আলহাজ্ব আবুল কাশেম ও মরহুমা ফাতেমা খাতুন মারকাযুল কুরআন মাদরাসা
          (2024-25)
        </h2>
        <div className="flex items-center gap-2">
          <p className="flex gap-1 items-center">
            <MdLocationPin></MdLocationPin> <span> আদিতমারী, লালমনিরহাট </span>
          </p>
          <p className="flex gap-1 items-center">
            <IoMdCall></IoMdCall> <span> +8801719107678 </span>
          </p>
          <p className="flex gap-1 items-center">
            <HiOutlineMail></HiOutlineMail> <span> ar.mahfuj.dev@gmail.com </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
