import { FaBirthdayCake } from "react-icons/fa";

const BirthdayList = () => {
  const todayBirthdays = [
    {
      name: "মুহাম্মদ বিজয় বিন্দ",
      id: "18586",
      class: "হিসনুল মুসলিম",
      age: 12,
    },
    { name: "গফুরের রহমান", id: "18470", class: "হিসনুল মুসলিম", age: 13 },
    {
      name: "সুমাইয়া খাতুন",
      id: "01007",
      class: "২য় বর্ষ (হেদায়াতুন নাহব)",
      age: 15,
    },
  ];

  const upcomingBirthdays = [
    {
      name: "মিরাজুল আলমগীরুল ইসলাম",
      id: "181032",
      class: "ফোরান (বানান)",
      age: 9,
      upcomingAge: "10 Oct, Age Will be 9 Years",
    },
    {
      name: "মুস্তফা আক্তার বৃষ্টি",
      id: "0725",
      class: "২য় বর্ষ (হেদায়াতুন নাহব)",
      age: 16,
      upcomingAge: "10 Oct, Age Will be 16 Years",
    },
    {
      name: "মেহেদি হাসান",
      id: "18642",
      class: "মুজাদালাসহ ১ম বর্ষ (নিউজান)",
      age: 17,
      upcomingAge: "10 Oct, Age Will be 17 Years",
    },
  ];

  return (
    <div className="space-y-8 p-4">
      {/* Today Birthday Section */}
      <div className="bg-blue-500 text-white shadow-lg rounded-lg p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold flex items-center">
            <FaBirthdayCake className="mr-2" />
            Today Birthday
          </h3>
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-1 px-3 rounded">
            SEND SMS
          </button>
        </div>
        <ul className="mt-4 space-y-3">
          {todayBirthdays.map((bday) => (
            <li
              key={bday.id}
              className="flex justify-between items-center bg-white text-gray-900 p-3 rounded shadow"
            >
              <div>
                <p className="font-semibold">{bday.name}</p>
                <p className="text-sm">
                  ID: {bday.id}, Class: {bday.class}
                </p>
              </div>
              <span className="bg-blue-200 text-blue-800 py-1 px-3 rounded-full">
                {bday.age} Years
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Upcoming Birthday Section */}
      <div className="bg-[#5D4037] text-white shadow-lg rounded-lg p-4">
        <h3 className="text-lg font-semibold flex items-center">
          <FaBirthdayCake className="mr-2" />
          Upcoming Birthday
        </h3>
        <ul className="mt-4 space-y-3">
          {upcomingBirthdays.map((bday) => (
            <li
              key={bday.id}
              className="flex justify-between items-center bg-white text-gray-900 p-3 rounded shadow"
            >
              <div>
                <p className="font-semibold">{bday.name}</p>
                <p className="text-sm">
                  ID: {bday.id}, Class: {bday.class}
                </p>
              </div>
              <span className="bg-brown-200 text-brown-800 py-1 px-3 rounded-full">
                {bday.upcomingAge}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BirthdayList;
