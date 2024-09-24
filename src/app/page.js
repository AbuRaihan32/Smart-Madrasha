import Banner from "@/components/Home/Banner/Banner";
import DigitalAttendance from "@/components/Home/DigitalAttendance/DigitalAttendance";
import Exam from "@/components/Home/Exam/Exam";
import Overview from "@/components/Home/Overview/Overview";
import StudentReport from "@/components/Home/StudentReport/StudentReport";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Overview></Overview>
      <DigitalAttendance></DigitalAttendance>
      <Exam></Exam>
      <StudentReport></StudentReport>
    </>
  );
}
