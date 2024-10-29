"use client";
import React, { useEffect, useState } from "react";
import Not from "../../public/LottieJson/NotFound.json";
import Lottie from "lottie-react";
import Button from "@/components/Shared/Button";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Only set to true after the component is mounted
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[500px] flex justify-center items-center">
        <p>loading...</p>
      </div>
    ); // Avoid rendering anything until the component has mounted
  }
  return (
    <div className=" max-w-3xl mx-auto">
      <div className="relative">
        <Lottie animationData={Not}></Lottie>
        <div className="absolute top-[80%] right-[40%]">
          <div onClick={() => router.back()}>
            <Button text={"Go Back"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
