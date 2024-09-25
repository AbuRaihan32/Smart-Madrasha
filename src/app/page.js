import Account from "@/components/Home/Account/Account";
import Banner from "@/components/Home/Banner/Banner";
import DigitalAttendance from "@/components/Home/DigitalAttendance/DigitalAttendance";
import Exam from "@/components/Home/Exam/Exam";
import Location from "@/components/Home/Location/Location";
import Overview from "@/components/Home/Overview/Overview";
import StudentReport from "@/components/Home/StudentReport/StudentReport";
import Testimonials from "@/components/Home/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="space-y-10 mb-10">
      <Banner></Banner>
      <Overview></Overview>
      <DigitalAttendance></DigitalAttendance>
      <Exam></Exam>
      <Account></Account>
      <StudentReport></StudentReport>
      <Testimonials></Testimonials>
      <Location></Location>
    </div>
  );
}
