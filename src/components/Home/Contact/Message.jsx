"use client";
import Button from "@/components/Shared/Button";
import React, { useState } from "react";
import { FaMobileRetro, FaUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";

const Message = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.mobile) formErrors.mobile = "Mobile number is required";
    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);

    // Return true if no errors
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <section className="bg-slate-100 pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact US</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <form onSubmit={handleSubmit} className="space-y-4 col-span-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                Name :{" "}
                {errors.name && <span className="text-red-500 text-sm">*</span>}
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className={`w-full p-2 border outline-none rounded-md `}
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                Email :{" "}
                {errors.email && (
                  <span className="text-red-500 text-sm">*</span>
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className={`w-full p-2 border outline-none rounded-md`}
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                Subject :{" "}
                {errors.subject && (
                  <span className="text-red-500 text-sm">*</span>
                )}
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className={`w-full p-2 border outline-none rounded-md`}
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                Mobile No :{" "}
                {errors.mobile && (
                  <span className="text-red-500 text-sm">*</span>
                )}
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile number"
                  className={`w-full p-2 border outline-none rounded-md`}
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              Message :{" "}
              {errors.message && (
                <span className="text-red-500 text-sm">*</span>
              )}
              <textarea
                name="message"
                placeholder="Your message"
                className={`w-full p-2 border outline-none  rounded-md`}
                value={formData.message}
                onChange={handleInputChange}
                rows={"2"}
              ></textarea>
            </div>

            <Button text={"Send"}></Button>
          </form>

          <div className="space-y-4 mt-5">
            {/* Contact information section */}
            <div className="flex items-center">
              <p className="ml-2 flex items-center gap-2">
                <FaUser color="#0098A8"></FaUser> <span>Abu Rayhan Mahfuj</span>
              </p>
            </div>

            <div className="flex items-center">
              <p className="ml-2 flex items-center gap-2">
                <MdLocationPin size={25} color="#0098A8"></MdLocationPin>{" "}
                Markazul Quran Madrasha, Aditmari, Lalmonirhat.
              </p>
            </div>

            <div className="flex items-center">
              <p className="ml-2 flex items-center gap-2">
                {" "}
                <FaMobileRetro color="#0098A8"></FaMobileRetro>{" "}
                <span>+8801719107678</span>
              </p>
            </div>

            <div className="flex items-center">
              <p className="ml-2 flex items-center gap-2">
                <HiOutlineMail color="#0098A8"></HiOutlineMail>{" "}
                <span>ar.mahfuj.dev@gmail.com</span>
              </p>
            </div>

            <div className="flex items-center">
              <p className="ml-2 flex items-center gap-2">
                {" "}
                <TfiWorld color="#0098A8"></TfiWorld>{" "}
                <span>
                  <a href="https://portfolio-gilt-omega-44.vercel.app">
                    www.abu-rufaida.com
                  </a>
                </span>
              </p>
            </div>

            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-36"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
