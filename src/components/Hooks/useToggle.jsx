'use client'
import { ToggleContext } from "@/app/dashboard/layout";
import { useContext } from "react";

const useToggle = () => {
  const toggleValue = useContext(ToggleContext);
  return toggleValue;
};

export default useToggle;
