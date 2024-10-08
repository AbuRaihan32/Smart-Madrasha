import EmployeeAttendance from "./EmployeeAttendance";
import StudentTable from "./StudentsTable";

const DashboardContent = () => {
  return (
    <>
      <StudentTable></StudentTable>
      <EmployeeAttendance></EmployeeAttendance>
    </>
  );
};

export default DashboardContent;
