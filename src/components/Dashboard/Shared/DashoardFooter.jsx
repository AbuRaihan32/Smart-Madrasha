import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const DashboardFooter = () => {
  return (
    <footer
      className={`w-full bg-[#00A12A] pt-8 flex-col md:flex-row flex gap-4  right-0 text-white overflow-y-auto`}
    >
      <div className="container mx-auto text-center">
        {/* Top buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-6 px-4">
          <button className="border-2 border-white text-white py-2 px-6 shadow-xl hover:shadow-2xl">
            SHARE EXPERIENCE
          </button>
          <button className="border-2 border-white text-white py-2 px-6 shadow-xl hover:shadow-2xl">
            SUPPORT: 09638 66 99 66, 01739 144141
          </button>
          <button className="border-2 border-white text-white py-2 px-6 shadow-xl hover:shadow-2xl">
            MAKE PAYMENT
          </button>
        </div>

        {/* Social media icons */}
        <div className="sm:flex justify-center items-center gap-4 mb-6 ">
          <div className="flex justify-center items-center gap-3 mb-3 sm:mb-0">
            <a
              href="#"
              className="text-white text-2xl bg-[#00A12A] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-lg p-3 rounded-full"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              href="#"
              className="text-white text-2xl bg-[#00A12A] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-lg p-3 rounded-full"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              href="#"
              className="text-white text-2xl bg-[#00A12A] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-lg p-3 rounded-full"
            >
              <FaYoutube></FaYoutube>
            </a>
          </div>

          {/* Google Play button */}
          <div className="sm:flex items-center">
            <a href="#" className="inline-block">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                width={40}
                height={15}
                className="w-40 mx-auto"
              />
            </a>
          </div>
        </div>

        {/* Copyright text */}
        <div className="bg-[#008122] text-white">
          <p className="text-center py-5">
            © {new Date().getFullYear()} Abu Raihan Mahfuz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
