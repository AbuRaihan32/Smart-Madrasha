import EmployeeAttendance from "./EmployeeAttendance";
import StudentAttendance from "./StudentAttendance";
import StudentTable from "./StudentsTable";

const DashboardContent = () => {
  return (
    <>
      <StudentTable></StudentTable>
      <EmployeeAttendance></EmployeeAttendance>
      <StudentAttendance></StudentAttendance>
    </>
  );
};

export default DashboardContent;
