import Banner from "@/components/Home/Banner/Banner";
import DigitalAttendance from "@/components/Home/DigitalAttendance/DigitalAttendance";
import Overview from "@/components/Home/Overview/Overview";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Overview></Overview>
      <DigitalAttendance></DigitalAttendance>
    </>
  );
}
