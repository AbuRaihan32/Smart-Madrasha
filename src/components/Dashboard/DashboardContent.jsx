import BirthdayList from "./BirthdayList";
import BloodGroupChart from "./BloodGroupChart";
import EmployeeAttendance from "./EmployeeAttendance";
import GenderChart from "./GenderChart";
import SessionBasedStudentChart from "./SessionBasedStudentChart";
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
      <BirthdayList></BirthdayList>
    </>
  );
};

export default DashboardContent;
