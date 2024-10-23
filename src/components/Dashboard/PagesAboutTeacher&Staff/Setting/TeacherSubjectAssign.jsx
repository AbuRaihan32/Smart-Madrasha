"use client";
import React, { useState } from "react";

const TeacherSubjectAssign = () => {
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const subjects = [
    "তাফসীরে বাযযাবী",
    "দেওবন্দ আন্দোলন: ইতিহাসে প্রতিচ্ছবি অবদান",
    "নাওজের ও ফারাজীদ",
    "বিশেষ পরীক্ষার গঠ",
    "মিশকাতুল মাসাবীহ (১ম খন্ড)",
    "মিশকাতুল মাসাবীহ (২য় খন্ড)",
    "শরহে আকাইদ",
    "শরহে নুখবাতুল ফিকার",
    "হেদায়া (৩য় খন্ড)",
    "হেদায়া (৪র্থ খন্ড)",
  ];

  const handleSubjectChange = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((sub) => sub !== subject)
        : [...prev, subject]
    );
  };

  return (
    <div className="bg-slate-50 mt-10 md:mt-8 p-3 pb-4 rounded-lg min-h-[400px]  shadow-sm ">
      <h1 className="text-lg font-bold mb-4">Assign Subjects to Teacher</h1>

      {/* Input Information */}
      <div className="flex flex-col md:flex-row gap-4 space-y-2 md:space-y-0">
        <div className="">
          <select
            id="teacher"
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select Teacher</option>
            <option value="মাওলানা আবু রায়হান মাহফুজ">
              মাওলানা আবু রায়হান মাহফুজ
            </option>
            <option value="মাওলানা মাহফুজ আবেদীন">মাওলানা মাহফুজ আবেদীন</option>
            <option value="মাওলানা আবু রায়হান মাহফুজ">
              মাওলানা আবু রায়হান মাহফুজ
            </option>
            {/* Add other teachers here */}
          </select>
        </div>

        <div className="">
          <select
            id="Class"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select Class</option>
            <option value="ফযীলত ১ম বর্ষ (জালালাইন)">
              ফযীলত ১ম বর্ষ (জালালাইন)
            </option>
            <option value="শহরে বেকায়া">শহরে বেকায়া</option>
          </select>
        </div>
      </div>

      {selectedClass && selectedTeacher && (
        <>
          <p className="font-medium my-2">
            Checked to add subject and unchecked to remove subject:
          </p>

          <div className="flex flex-col md:flex-row gap-5 border rounded p-3">
            <div className="w-full md:w-[60%] md:border-r-2">
              {subjects.map((subject, index) => (
                <div key={index} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedSubjects.includes(subject)}
                      onChange={() => handleSubjectChange(subject)}
                      className="mr-2"
                    />
                    {subject}
                  </label>
                </div>
              ))}
            </div>

            <div className="mt-4 md:mt-0 w-full md:w-[40%]">
              <p className="font-bold">Selected Subjects:</p>
              <ul>
                {selectedSubjects.map((subject, index) => (
                  <li key={index}>
                    {index + 1}. {subject}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TeacherSubjectAssign;
