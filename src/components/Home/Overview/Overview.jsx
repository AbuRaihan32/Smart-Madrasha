import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Empowering Educational Institutions
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Our platform is trusted by hundreds of institutions across
            Bangladesh, connecting teachers, students, and administrators
            seamlessly for a better learning experience.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 md:grid-cols-3">
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="600"
            className="flex flex-col rounded-lg border bg-white border-gray-100 px-4 py-8 text-center shadow-md hover:shadow-lg"
          >
            <Image
              src="/Institution.png"
              className="w-24 h-24 mx-auto mb-2 border rounded-full"
              alt="institution"
            />

            <div className="order-last text-lg font-medium text-gray-500">
              Total Institutions
            </div>

            <div className="text-4xl font-extrabold  text-[#0098A8] md:text-4xl">
              200
            </div>
          </div>

          <div
            data-aos="flip-up"
            data-aos-easing="linear"
            data-aos-duration="600"
            className="flex flex-col rounded-lg border bg-white border-gray-100 px-4 py-8 text-center shadow-md hover:shadow-lg"
          >
            <Image
              src="/Students1.png"
              className="w-24 h-24 mx-auto mb-2 border rounded-full"
              alt="Students"
            />
            <div className="order-last text-lg font-medium text-gray-500">
              Total Students
            </div>

            <div className="text-4xl font-extrabold text-[#0098A8] md:text-4xl">
              245984
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="600"
            className="flex flex-col rounded-lg bg-white border border-gray-100 px-4 py-8 text-center shadow-md hover:shadow-lg"
          >
            <Image
              src="/Teachers.png"
              className="w-24 h-24 mx-auto mb-2 border rounded-full"
              alt="Teachers"
            />
            <div className="order-last text-lg font-medium text-gray-500">
              Total Teachers
            </div>

            <div className="text-4xl font-extrabold text-[#0098A8] md:text-4xl">
              1254
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
