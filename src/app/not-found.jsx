'use client'
import React from "react";
import Not from "../../public/NotFound.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div className="relative">
      <div className="">
        <Lottie animationData={Not} size={20}></Lottie>
      </div>
      <div>
        <button className="btn absolute">Go To Home</button>
      </div>
    </div>
  );
};

export default ErrorPage;
