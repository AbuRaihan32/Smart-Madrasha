import { IoMdCall } from "react-icons/io";
import { MdLocationPin, MdMenu } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import useToggle from "@/components/Hooks/useToggle";

const Header = () => {
  const { setToggle, toggle } = useToggle();
  // TODO: get header data from database
  return (
    <header
      className={`${
        toggle ? " w-full" : "w-5/6"
      } bg-[#00A12A] p-5 flex-col md:flex-row flex gap-4 fixed right-0 text-white overflow-y-auto mb-3`}
    >
      <div
        onClick={() => setToggle(!toggle)}
        className="text-white text-4xl cursor-pointer"
      >
        <MdMenu></MdMenu>
      </div>
      <div className="flex-1">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          আলহাজ্ব আবুল কাশেম ও মরহুমা ফাতেমা খাতুন মারকাযুল কুরআন মাদরাসা
          (2024-25)
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <p className="flex gap-1 items-center">
            <MdLocationPin></MdLocationPin> <span> আদিতমারী, লালমনিরহাট </span>
          </p>
          <p className="flex gap-1 items-center">
            <IoMdCall></IoMdCall> <span> +8801719107678 </span>
          </p>
          <p className="flex gap-1 items-center">
            <HiOutlineMail></HiOutlineMail>{" "}
            <span> ar.mahfuj.dev@gmail.com </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
