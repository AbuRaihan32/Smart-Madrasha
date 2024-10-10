import BirthdayList from "./BirthdayList";
import EmployeeAttendance from "./EmployeeAttendance";
import EmployeeChart from "./EmployeeChart";
import SessionBasedStudentChart from "./SessionBasedStudentChart";
import SMSChart from "./SMSChart";
import StudentAttendance from "./StudentAttendance";
import StudentTable from "./StudentsTable";
import BloodGroupChart from "./BloodGroupChart";
import GenderChart from "./GenderChart";

const DashboardHome = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='w-[70%]'>
          <StudentTable></StudentTable>
          <SessionBasedStudentChart></SessionBasedStudentChart>
        </div>
        <div>
          <GenderChart></GenderChart>
          <EmployeeAttendance></EmployeeAttendance>
          <StudentAttendance></StudentAttendance>
          <BloodGroupChart></BloodGroupChart>
          <EmployeeChart></EmployeeChart>
          <SMSChart></SMSChart>
        </div>
      </div>
      <div>
        <BirthdayList></BirthdayList>
      </div>
    </div>
  );
};

export default DashboardHome;
