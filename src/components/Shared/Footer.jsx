"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathName = usePathname();

  if (pathName.includes("dashboard")) {
    return;
  }

  return (
    <footer className="bg-slate-200 shadow-2xl ">
      <p className="text-center py-5 text-gray-600">
        © {new Date().getFullYear()} Abu Raihan Mahfuz. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
