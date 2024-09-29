import React from "react";
import Button from "./Button";

const Modal = () => {
  return (
    <dialog id="my_modal_3" className="modal text-black w-[30%] mx-auto">
      <div className="modal-box px-4 py-6 rounded-lg">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2">
            ✕
          </button>
        </form>
        <h1 className="text-4xl font-bold text-center text-[#0098A8]">Login now!</h1>
        <form className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <Button text={'Sign In'}></Button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
