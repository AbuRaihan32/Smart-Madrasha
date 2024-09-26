import React from "react";
import Message from "./Message";

const Location = () => {
  return (
    <section className="bg-slate-100 py-10 ">
      <Message></Message>
      <div className=" max-w-6xl mx-auto flex justify-center mt-12 rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9493.889235282588!2d89.33870043227219!3d25.91976312470967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e326eb2cd4c1c9%3A0xd135a17a24d2bc8e!2sMarkazul%20Quran%20Mohila%20Madrasha!5e1!3m2!1sen!2sbd!4v1727335293079!5m2!1sen!2sbd"
          className="w-full h-96 rounded-lg shadow-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of Markazul Quran Mohila Madrasha"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
