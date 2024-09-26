'use client'
import React, { useState } from "react";

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
      console.log(formData)
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact us</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className={`w-full p-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <span className="text-red-500 text-sm">*</span>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className={`w-full p-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className="text-red-500 text-sm">*</span>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className={`w-full p-2 border ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                value={formData.subject}
                onChange={handleInputChange}
              />
              {errors.subject && (
                <span className="text-red-500 text-sm">*</span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile number"
                className={`w-full p-2 border ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                value={formData.mobile}
                onChange={handleInputChange}
              />
              {errors.mobile && <span className="text-red-500 text-sm">*</span>}
            </div>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your message"
              className={`w-full p-2 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-md h-32`}
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            {errors.message && <span className="text-red-500 text-sm">*</span>}
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            SEND
          </button>
        </form>

        <div className="space-y-4">
          {/* Contact information section */}
          <div className="flex items-center">
            <p className="ml-2">Loops IT Ltd.</p>
          </div>

          <div className="flex items-center">
            <p className="ml-2">328, East Nakhal Para, Tejgaon, Dhaka 1215</p>
          </div>

          <div className="flex items-center">
            <p className="ml-2">09638 66 99 66</p>
          </div>

          <div className="flex items-center">
            <p className="ml-2">info@loopsit.com</p>
          </div>

          <div className="flex items-center">
            <p className="ml-2">www.loopsit.com</p>
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
    </section>
  );
};

export default Message;
