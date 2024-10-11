import Link from "next/link";
import {
  FaHome,
  FaWallet,
  FaChartPie,
  FaUserCog,
  FaMoon,
} from "react-icons/fa";
import SidebarProfile from "../DashboardHome/SidebarProfile";
import useToggle from "@/components/Hooks/useToggle";

const Sidebar = () => {
  const { toggle } = useToggle();
  return (
    <div
      className={`w-1/6 bg-[#273A28] py-5 flex flex-col h-screen justify-between fixed text-white overflow-y-auto shadow-2xl ${
        toggle ? "hidden" : "block"
      }`}
    >
      <SidebarProfile></SidebarProfile>
      <div>
        <nav className="space-y-4">
          <details className="dropdown w-full border-t border-b border-[#1d2c1e] hover:bg-[#182c19]">
            <summary className="m-1 ">Basic Settings</summary>
            <ul className="menu dropdown-content rounded-box z-[1] p-2 shadow">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
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
