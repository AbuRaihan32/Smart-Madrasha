import Link from "next/link";
import {
  FaHome,
  FaWallet,
  FaChartPie,
  FaUserCog,
  FaMoon,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-[#0098A8] p-5 flex flex-col h-screen justify-between fixed text-white overflow-y-auto">
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
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">Ali Riaz</p>
            <p className="text-xs text-gray-400">Web Developer</p>
          </div>
        </div>
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
