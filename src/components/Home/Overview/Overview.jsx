'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Overview = () => {
  const [institutions, setInstitutions] = useState(0);
  const [students, setStudents] = useState(0);
  const [teachers, setTeachers] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const incrementInterval = 30; 
    const institutionTarget = 200;
    const studentTarget = 245984;
    const teacherTarget = 1254;
    const steps = duration / incrementInterval;

    const incrementValues = {
      institutions: institutionTarget / steps,
      students: studentTarget / steps,
      teachers: teacherTarget / steps,
    };

    const intervalId = setInterval(() => {
      setInstitutions((prev) =>
        Math.min(prev + incrementValues.institutions, institutionTarget)
      );
      setStudents((prev) =>
        Math.min(prev + incrementValues.students, studentTarget)
      );
      setTeachers((prev) =>
        Math.min(prev + incrementValues.teachers, teacherTarget)
      );
    }, incrementInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto py-8 px-7 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
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
              width={90}
              height={90}
              className="w-24 h-24 mx-auto mb-2 border rounded-full"
              alt="institution"
            />

            <div className="order-last text-lg font-medium text-gray-500">
              Total Institutions
            </div>

            <div className="text-4xl font-extrabold text-[#0098A8] md:text-4xl">
              {Math.floor(institutions)}
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
              width={90}
              height={90}
              className="w-24 h-24 mx-auto mb-2 border rounded-full"
              alt="Students"
            />
            <div className="order-last text-lg font-medium text-gray-500">
              Total Students
            </div>

            <div className="text-4xl font-extrabold text-[#0098A8] md:text-4xl">
              {Math.floor(students)}
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
              width={90}
              height={90}
              className="w-24 h-24 mx-auto mb-2 border rounded-full"
              alt="Teachers"
            />
            <div className="order-last text-lg font-medium text-gray-500">
              Total Teachers
            </div>

            <div className="text-4xl font-extrabold text-[#0098A8] md:text-4xl">
              {Math.floor(teachers)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
