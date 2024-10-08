import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaWallet,
  FaChartPie,
  FaUserCog,
  FaMoon,
} from "react-icons/fa";
import { PuffLoader } from "react-spinners";

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-[#273A28] p-5 flex flex-col h-screen justify-between fixed text-white overflow-y-auto shadow-2xl">
      <div className="flex flex-col items-center justify-center gap-3">
        <Image
          src="/final-profile.jpg"
          alt="Profile"
          width={100}
          height={100}
          className="w-28 h-28 rounded-full border-4 mt-2 z-50"
        />
        <div className='absolute top-[14px] z-0'>
          <PuffLoader color="lime" size={140} speedMultiplier={0.5}></PuffLoader>
        </div>
        <p className="text-[14px]">আবু রায়হান মাহফুজ</p>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white mb-5">uifry</h1>
        <nav className="space-y-4">
          <Link
            href="#"
            className="flex items-center space-x-3 p-2 hover:bg-[#247983] rounded-lg"
          >
            <FaHome className="text-xl" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-3 p-2 hover:bg-[#247983] rounded-lg"
          >
            <FaChartPie className="text-xl" />
            <span>Analytics</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-3 p-2 hover:bg-[#247983] rounded-lg"
          >
            <FaWallet className="text-xl" />
            <span>My Wallet</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-3 p-2 hover:bg-[#247983] rounded-lg"
          >
            <FaUserCog className="text-xl" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>
      <div>
        <Link
          href="#"
          className="flex items-center space-x-3 mt-10 p-2 hover:bg-[#247983] rounded-lg"
        >
          <FaMoon className="text-xl" />
          <span>Dark Mode</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
