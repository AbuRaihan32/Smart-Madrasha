import Accounts from "./SingleLinks/Accounts/Accounts";
import Admission from "./SingleLinks/Admission/Admission";
import Attendances from "./SingleLinks/Attendances/Attendances";
import Basic from "./SingleLinks/Basic/Basic";
import Committee from "./SingleLinks/Committee/Committee";
import Exam from "./SingleLinks/Exam/Exam";
import Routines from "./SingleLinks/Routines/Routines";
import SMS from "./SingleLinks/SMS/SMS";
import SoftwareInvoice from "./SingleLinks/Softeare/SoftwareInvoice";
import StudentsManage from "./SingleLinks/StudentManage/StudentManage";
import StudentsInfo from "./SingleLinks/StudentsInfo/StudentsInfo";
import Teacher from "./SingleLinks/Teachers/Teacher";

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
