"use client";

import React from "react";

const MapSection = () => {
  return (
    <section className="w-full  bg-white">
      <div className="">
        {/* Map */}
        <div className="w-full h-62 md:h-125  overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Chittagong,Bangladesh&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
