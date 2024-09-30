"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { ModalContainer, Reoverlay } from "reoverlay";
import LoginModal from "../LoginModal/LoginModal";

const Navbar = () => {
  const user = false;

  // Reoverlay configuration
  Reoverlay.config([{ name: "LoginModal", component: LoginModal }]);

  const showLoginModal = () => {
    Reoverlay.showModal("LoginModal");
  };

  const navLinks = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Contact US</a>
      </li>
      <li>
        <a>About US</a>
      </li>
    </>
  );

  return (
    <div className="bg-[#0098A8]">
      <div className="navbar max-w-6xl mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-transparent bg-opacity-60 backdrop-blur-md z-[1] mt-3 w-52 p-2 shadow text-[#0098A8]"
            >
              {navLinks}
            </ul>
          </div>
          <Link href="/">
            {" "}
            <Image
              src={"/logo-white.png"}
              width={120}
              height={50}
              alt="logo"
            />{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#32b2c0]  group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-100 group-hover:h-full"></span>
              <span className="absolute right-1 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <AiOutlineLogout size={22}></AiOutlineLogout>
              </span>
              <span className="absolute left-1 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <AiOutlineLogout color="#0098A8" size={22}></AiOutlineLogout>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#0098A8] ">
                Sign Out
              </span>
            </button>
          ) : (
            <button onClick={showLoginModal}>
              <a className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#32b2c0]  group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-100 group-hover:h-full"></span>
                <span className="absolute right-1 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <AiOutlineLogin size={22}></AiOutlineLogin>
                </span>
                <span className="absolute left-1 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <AiOutlineLogin color="#0098A8" size={22}></AiOutlineLogin>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#0098A8] ">
                  Login Now
                </span>
              </a>
            </button>
          )}
        </div>
      </div>
      <ModalContainer />
    </div>
  );
};

export default Navbar;
