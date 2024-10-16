import React from "react";
import Basic from "./SingleLinks/Basic";
import Admission from "./SingleLinks/Admission";
import Teacher from "./SingleLinks/Teacher";
import StudentsInfo from "./SingleLinks/StudentsInfo";
import StudentsManage from "./SingleLinks/StudentManage";
import Attendances from "./SingleLinks/Attendances";
import Accounts from "./SingleLinks/Accounts";
import Exam from "./SingleLinks/Exam";
import SMS from "./SingleLinks/SMS";
import Routines from "./SingleLinks/Routines";
import Committee from "./SingleLinks/Committee";
import SoftwareInvoice from "./SingleLinks/SoftwareInvoice";

const NavLinksForSidebar = () => {
  return (
    <nav className=" mt-5">
      {/* Basic Settings */}
      <Basic></Basic>

      {/* Teacher & Staff */}
      <Teacher></Teacher>

      {/* Admission with Submenu */}
      <Admission></Admission>

      {/* students info */}
      <StudentsInfo></StudentsInfo>

      {/* students manage */}
      <StudentsManage></StudentsManage>

      {/* Attendances */}
      <Attendances></Attendances>

      {/* Accounts */}
      <Accounts></Accounts>

      {/* Exam */}
      <Exam></Exam>

      {/* SMS */}
      <SMS></SMS>

      {/* Routines */}
      <Routines></Routines>

      {/* Committee */}
      <Committee></Committee>

      {/* Invoice */}
      <SoftwareInvoice></SoftwareInvoice>
    </nav>
  );
};

export default NavLinksForSidebar;
