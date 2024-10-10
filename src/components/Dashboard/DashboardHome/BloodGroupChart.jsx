
import { FaTint } from "react-icons/fa";

const BloodGroupList = () => {
  const bloodGroups = [
    { group: "A+", count: 9 },
    { group: "B+", count: 6 },
    { group: "O-", count: 1 },
    { group: "O+", count: 3 },
    { group: "Unknown", count: 1264 },
  ];

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="bg-red-500 text-white flex items-center p-4 rounded-t-lg">
        <FaTint className="mr-2" />
        <h3 className="font-semibold text-lg">Blood Group</h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {bloodGroups.map((blood) => (
          <li
            key={blood.group}
            className="flex justify-between items-center p-4"
          >
            <span
              className={`font-semibold ${
                blood.group === "Unknown" ? "text-blue-500" : "text-gray-800"
              }`}
            >
              {blood.group}
            </span>
            <span
              className={`py-1 px-3 rounded-full text-sm ${
                blood.group === "Unknown"
                  ? "bg-red-100 text-red-500"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {blood.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BloodGroupList;
