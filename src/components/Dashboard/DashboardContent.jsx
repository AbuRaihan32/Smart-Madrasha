import BirthdayList from "./BirthdayList";
import EmployeeAttendance from "./EmployeeAttendance";
import GenderChart from "./GenderChart";
import StudentAttendance from "./StudentAttendance";
import StudentTable from "./StudentsTable";

const DashboardContent = () => {
  return (
    <>
      <StudentTable></StudentTable>
      <EmployeeAttendance></EmployeeAttendance>
      <StudentAttendance></StudentAttendance>
      <GenderChart></GenderChart>
      <BirthdayList></BirthdayList>
    </>
  );
};

export default DashboardContent;
