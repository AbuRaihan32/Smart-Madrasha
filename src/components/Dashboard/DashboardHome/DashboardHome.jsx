'use client'
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
      <div className="flex flex-col md:flex-row gap-4">
        <div className={'w-full md:w-[70%] space-y-4'}>
          <StudentTable></StudentTable>
          <SessionBasedStudentChart></SessionBasedStudentChart>
          <BirthdayList></BirthdayList>
        </div>
        <div className={'w-full md:w-[30%] space-y-4'}>
          <GenderChart></GenderChart>
          <EmployeeChart></EmployeeChart>
          <SMSChart></SMSChart>
          <EmployeeAttendance></EmployeeAttendance>
          <StudentAttendance></StudentAttendance>
          <BloodGroupChart></BloodGroupChart>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
