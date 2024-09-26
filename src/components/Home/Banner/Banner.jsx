'use client'
import Lottie from "lottie-react";
import React from "react";
import table from '../../../../public/table.json'
import Button from "@/components/Button/Button";

const Banner = () => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between h-[550px] z-0 pt-5">
        <div className="max-w-md">
          <div className="pb-5 border-b mb-4">
            <h1 className="text-5xl font-bold mb-1">Biddyanoy.com</h1>
            <p>Educational institution management service</p>
          </div>
          <p className="mb-5 text-justify">
            Biddyanoy.com is an educational institution management service to
            help institutes for save their time and improve management system.
            It is a simple yet powerful one point integrated platform that
            connects all the departments with its technologically advanced
            features and software modules such as Daily attendance which
            integrated with RFID and fingerprint device with automated SMS
            notification system, User friendly student fees & payroll management
            system, fully customable exam & results with graphical explanation
            and many more solutions.
          </p>
          <Button text={'Contact US'} link={'/'}></Button>
        </div>
        <div>
          <Lottie animationData={table}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Banner;
