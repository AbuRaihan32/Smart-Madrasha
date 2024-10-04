import React from "react";

const Header = () => {
  return (
    <header className=" w-5/6 bg-[#0098A8] p-5 flex justify-between fixed right-0 text-white overflow-y-auto">
      <div>
        <h2 className="text-2xl font-bold">Welcome Back, Ali 👋</h2>
        <p className="">
          Here's what's happening with your store today.
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
