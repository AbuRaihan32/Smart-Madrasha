"use client"
import Account from "@/components/Home/Account/Account";
import Banner from "@/components/Home/Banner/Banner";
import Location from "@/components/Home/Contact/Location";
import Message from "@/components/Home/Contact/Message";
import DigitalAttendance from "@/components/Home/DigitalAttendance/DigitalAttendance";
import Exam from "@/components/Home/Exam/Exam";
import Overview from "@/components/Home/Overview/Overview";
import StudentReport from "@/components/Home/StudentReport/StudentReport";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
// import ScrollToTopButton from "@/components/Shared/ScrollToTopButton";

export default function Home() {
  return (
    <div className="space-y-10">
      <Banner></Banner>
      <Overview></Overview>
      <DigitalAttendance></DigitalAttendance>
      <Exam></Exam>
      <Account></Account>
      <StudentReport></StudentReport>
      <Testimonials></Testimonials>
      <div className="bg-slate-100 rounded-t-3xl md:rounded-t-[50px]">
        <Location></Location>
        <Message></Message>
      </div>
      {/* <ScrollToTopButton></ScrollToTopButton> */}
    </div>
  );
}
