import { ModalWrapper, Reoverlay } from "reoverlay";
import "reoverlay/lib/ModalWrapper.css";
import Button from "../Shared/Button";

const LoginModal = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    alert(`Logged in with Email : ${email} Password : ${password}`);
    Reoverlay.hideModal(); // for close modal
  };

  const closeModal = () => {
    Reoverlay.hideModal();
  };

  return (
    <ModalWrapper animation={"rotate"}>
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <div className="w-[90%] h-14 bg-[#0098A8] absolute -top-7 right-[14px] flex items-center justify-center text-white">
          <div>
            <h1 className="text-2xl text-center text- font-bold">Login Now</h1>
            <button
              onClick={closeModal}
              className="absolute right-4 top-3 font-semibold hover:text-red-600"
            >
              ✕
            </button>
          </div>
        </div>
        <form onSubmit={handleLogin} className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
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
            <Button text={"Login"}></Button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default LoginModal;
