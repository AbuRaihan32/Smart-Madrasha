import BirthdayList from "./BirthdayList";
import BloodGroupChart from "./BloodGroupChart";
import EmployeeAttendance from "./EmployeeAttendance";
import GenderChart from "./GenderChart";
import SessionBasedStudentChart from "./SessionBasedStudentChart";
import SMSChart from "./SMSChart";
import StudentAttendance from "./StudentAttendance";
import StudentTable from "./StudentsTable";

const DashboardContent = () => {
  return (
    <>
      <StudentTable></StudentTable>
      <EmployeeAttendance></EmployeeAttendance>
      <StudentAttendance></StudentAttendance>
      <GenderChart></GenderChart>
      <BloodGroupChart></BloodGroupChart>
      <SessionBasedStudentChart></SessionBasedStudentChart>
      <SMSChart></SMSChart>
      <BirthdayList></BirthdayList>
    </>
  );
};

export default DashboardContent;
