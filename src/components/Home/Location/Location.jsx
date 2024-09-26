import React from "react";

const Location = () => {
  return (
    <div className="bg-slate-50 py-10 ">
      <div className="flex justify-center mt-12 rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.249058699712!2d89.3388839105961!3d25.91835820202007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e326eb2cd4c1c9%3A0xd135a17a24d2bc8e!2sMarkazul%20Quran%20Mohila%20Madrasha!5e1!3m2!1sen!2sbd!4v1727334443452!5m2!1sen!2sbd"
          className="w-[81%] h-96 rounded-lg shadow-lg"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Map of Markazul Quran Mohila Madrasha"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
