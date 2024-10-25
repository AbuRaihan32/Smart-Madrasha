import Image from "next/image";

const EmployeeIdCard = () => {
  return (
    <div className="bg-white mx-auto mt-6 p-4 rounded-lg shadow-md max-w-xs border border-gray-300 relative">
      {/* School Information */}
      <div className="text-center mb-2">
        <h2 className="text-lg font-semibold text-teal-600">
          G.S. PUBLIC SCHOOL
        </h2>
        <p className="text-sm text-gray-500">
          Nagla Khush, Basendhwa, Agra Road, Etah
        </p>
        <p className="text-sm text-gray-500">
          Affiliated with CBSE, Session 2024-25
        </p>
      </div>

      {/* Image and Name */}
      <div className="flex justify-center mb-2">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-teal-500">
          <Image
            src="/final-profile.jpg"
            alt="Employee"
            className="w-full h-full object-cover"
            width={50}
            height={50}
          />
        </div>
      </div>
      <h3 className="text-center text-lg font-bold text-teal-600">The Name</h3>

      {/* Details */}
      <div className="text-sm text-gray-700 mt-3">
        <p>
          <strong>Class:</strong> 14 Sec: A Roll: 25
        </p>
        <p>
          <strong>Fathers Name:</strong> The Name
        </p>
        <p>
          <strong>Date of Birth:</strong> 12/02/2012
        </p>
        <p>
          <strong>Mob:</strong> 0123456789
        </p>
        <p>
          <strong>Address:</strong> Panjara Basti, Panjara, Uttar Dinajpur,
          123456
        </p>
      </div>
    </div>
  );
};

export default EmployeeIdCard;
