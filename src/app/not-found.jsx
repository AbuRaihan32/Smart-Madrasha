"use client";
import React from "react";
import Not from "../../public/LottieJson/NotFound.json";
import Lottie from "lottie-react";
import Button from "@/components/Shared/Button";

const ErrorPage = () => {
  return (
    <div className=" max-w-3xl mx-auto">
      <div className="relative">
        <Lottie animationData={Not}></Lottie>
        <div className="absolute top-[80%] right-[40%]">
          <Button text={"Go To Home"} link={"/"}></Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
