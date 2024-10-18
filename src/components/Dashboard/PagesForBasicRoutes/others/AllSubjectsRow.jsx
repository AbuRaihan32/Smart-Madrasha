'use client'
import { useForm } from "react-hook-form";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRef } from "react";
import Swal from "sweetalert2";
import Image from "next/image";

const AllSubjectsRow = ({ index, subject }) => {
  const modalRef1 = useRef(null);


  const { register, handleSubmit } = useForm();

  // ! handle Update
  const handleUpdate = () => {
    modalRef1.current.showModal();
  };

  // ! confirm Update
  const onSubmit = (data) => {
    console.log(data);

          Swal.fire({
            title: "Updated",
            text: "User has been updated.",
            icon: "success",
          });
          modalRef1.current.close();

  };

  // ! handle delete
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
       
              Swal.fire({
                title: "Deleted",
                text: "Your food has been Deleted.",
                icon: "success",
              });
      }
    });
  };

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <Image
                  src={"/final-profile.jpg"}
                  alt="Avatar Tailwind CSS Component"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{subject.subjectName}</div>
            </div>
          </div>
        </td>
        <td>Email</td>
        <td>Status</td>
        <td> Role </td>
        <td>
          <button
            onClick={ handleUpdate}
            className="btn btn-circle btn-outline"
          >
            <CiEdit className="text-xl"></CiEdit>
          </button>
        </td>
        <td>
          <button
            onClick={handleDelete}
            className="btn btn-circle btn-outline"
          >
            <RiDeleteBin6Line></RiDeleteBin6Line>
          </button>
        </td>
      </tr>

      {/* modal */}
      <dialog id="my_modal_4" className="modal md:ml-[120px]" ref={modalRef1}>
        <div className="modal-box max-w-md">
          <h1 className="text-xl text-[#1E2865] text-center font-medium">
            Change Role And Status
          </h1>
          <form className="px-6" onSubmit={handleSubmit(onSubmit)}>
            {/* row 1 */}
            <div className="">
              <div className="mb-3">
                <label className="text-xs font-semibold px-1">Role</label>
                <div className="flex flex-col relative">
                  <input
                    type="text"
                    className="w-full py-2 px-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    {...register("role")}
                  />
                  <p className="text-xs font-semibold ml-1 text-[#1e5744]">
                    Please click on the field After Change
                  </p>
                  <div
                    className="absolute right-2 top-[4px] text-xl"
                  >
                    <span className="p-[6px] bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] rounded-md text-xs text-white cursor-pointer">
                      {" "}
                      Change{" "}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="text-xs font-semibold px-1">Status</label>
                <div className="flex flex-col relative">
                  <input
                    type="text"
                    className="w-full py-2 px-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    {...register("status")}
                  />
                  <p className="text-xs font-semibold ml-1 text-[#1e5744]">
                    Please click on the field After Change
                  </p>
                  <div
                    className="absolute right-2 top-[4px] text-xl"
                  >
                    <span className="p-[6px] bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] rounded-md text-xs text-white cursor-pointer">
                      {" "}
                      Change{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-around gap-4 mt-8">
              <div className="flex justify-center">
                <button className=" text-xl text-white relative px-7 md:px-10 py-2 font-semibold group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] group-hover:bg-gradient-to-r hover:from-[#31EDAF] hover:to-[#24BAD2] group-hover:-skew-x-[18deg]"></span>

                  <span className="flex items-center justify-center gap-2 relative">
                    <span className="">Save</span>{" "}
                  </span>
                </button>
              </div>
              <div className="">
                <form method="dialog" className="flex justify-center">
                  {/* if there is a button, it will close the modal */}
                  <button className="  text-xl text-white relative px-7 md:px-10 py-2 font-semibold group">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] group-hover:bg-gradient-to-r hover:from-[#31EDAF] hover:to-[#24BAD2] group-hover:-skew-x-[18deg]"></span>

                    <span className="flex items-center justify-center gap-2 relative">
                      <span className="">close</span>{" "}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};


export default AllSubjectsRow;
