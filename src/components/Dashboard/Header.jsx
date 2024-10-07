import React from "react";

const Header = () => {
  return (
    <header className=" w-5/6 bg-[#00A12A] p-5 flex justify-between fixed right-0 text-white overflow-y-auto">
      <div>
        <h2 className="text-2xl font-bold">
          আলহাজ্ব আবুল কাশেম ও মরহুমা ফাতেমা খাতুন <br /> মারকাযুল কুরআন মাদরাসা
          (2024-25)
        </h2>
        <p className="">
          Here&rsquo;s what&rsquo;s happening with your store today.
        </p>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search for anything..."
          className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-gray-300"
        />
        <span className="absolute left-3 top-2 text-gray-400">🔍</span>
      </div>
    </header>
  );
};

export default Header;
