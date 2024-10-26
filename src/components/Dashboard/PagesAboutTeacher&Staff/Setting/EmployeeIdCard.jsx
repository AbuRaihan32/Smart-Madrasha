import Image from "next/image";

const EmployeeIdCard = () => {
  return (
    <div className="bg-white mx-auto mt-6 h-[500px] rounded-2xl shadow-md max-w-xs border border-gray-300 relative overflow-hidden">
      <div className="w-[400px] h-64 bg-[#221E54] absolute rotate-[30deg] rounded-r-xl -right-[72px] -top-[72px] z-10"></div>
      <div className="w-full h-48 bg-[#6ABC48] absolute rotate-[30deg] rounded-r-xl top-2 -left-32 z-20"></div>

      <div className="absolute z-30 w-[36px] h-[36px] top-3 right-[155px]">
        <Image
          className="rounded-full"
          src={"/mq-logo.jpg"}
          width={500}
          height={500}
          alt="logo"
        />
      </div>

      <div className=" absolute z-30 w-full h-20 top-3 text-white">
        <div className="w-full flex justify-end pr-3">
          <p className="text-right w-36 text-xs">
            আলহাজ্ব আবুল কাশেম ও মরহুমা ফাতেমা খাতুন মারকাযুল কুরআন মাদ্রাসা
          </p>
        </div>
      </div>

      <div className="absolute z-30 top-[98px] right-16">
        <div className="flex justify-center">
          <div className="w-[172px] h-[172px] mask mask-hexagon bg-[#6ada3b] flex items-center justify-center">
            <div className="w-[160px] h-[160px] mask mask-hexagon p-[2px] bg-[#ffffff]">
              <Image
                className="mask mask-hexagon w-full h-full"
                src={"/final-profile.jpg"}
                width={500}
                height={500}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-14 z-30 w-full flex justify-center min-h-40 text-center ">
        <div className="w-[90%] space-y-2">
          <h1 className="text-[#221E54] text-xl font-semibold">
            Abu Raihan Mahfuz
          </h1>
          <p className="p-2 bg-[#6ABC48] rounded-md w-fit mx-auto text-white">
            Senior Muhaddis
          </p>
          <div className="flex gap-2 text-start items-center justify-center">
            <div className="">
              <p className="font-semibold text-[15px]">ID No</p>
              <p className="font-semibold text-[15px]">Email</p>
              <p className="font-semibold text-[15px]">Phone</p>
            </div>
            <div>
              <p className="text-[15px]">: 00010</p>
              <p className="text-[15px]">: ar.mahfuj.dev@gmail.com</p>
              <p className="text-[15px]">: 01719107678</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-14 bg-[#6ABC48] absolute rotate-[30deg] -bottom-4 -left-32 z-10"></div>
      <div className="w-24 h-14 bg-[#221E54] absolute rotate-[30deg] rounded-tr-xl -bottom-5 -left-14 z-20"></div>
    </div>
  );
};

export default EmployeeIdCard;
