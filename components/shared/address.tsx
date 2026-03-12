import Image from "next/image";
import React from "react";

const Address = () => {
  return (
    <div className="p-5 md:p-20 bg-[#F5F7FA]">
      <div className="max-w-md mx-auto text-center font-bold mb-6 md:mb-13">
        <h1 className=" text-2xl md:text-4xl">Our Campus Address & Contact </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-5">
        <div className="bg-white p-3 md:p-6 text-center flex flex-col items-center justify-center shadow rounded-2xl">
          <div className="flex items-center justify-center bg-[#F2EFFF] w-16 h-16 md:w-20 md:h-20 rounded-full">
            <Image
              src="/images/bx.png"
              alt=""
              width={45}
              height={45}
              className="w-8 md:w-11 h-8 md:h-11"
            />
          </div>
          <h3 className="text-sm md:text-2xl font-bold mt-5 md:mt-10">
            Hotline
          </h3>
          <p className="text-[#4C4C4C] text-xs md:text-base mt-2.5 md:mt-4">
            (852) 749-9581,
          </p>
        </div>

        <div className="bg-white p-3 md:p-6 text-center flex flex-col items-center justify-center shadow rounded-2xl">
          <div className="flex items-center justify-center bg-[#F2EFFF] w-16 h-16 md:w-20 md:h-20 rounded-full">
            <Image
              src="/images/fluent.png"
              alt=""
              width={45}
              height={45}
              className="w-8 md:w-11 h-8 md:h-11"
            />
          </div>
          <h3 className="text-sm md:text-2xl font-bold mt-5 md:mt-10">
            Address
          </h3>
          <p className="text-[#4C4C4C] text-xs md:text-base mt-2.5 md:mt-4">
            (522) 685-8547
          </p>
        </div>

        <div className="bg-white p-3 md:p-6 text-center flex flex-col items-center justify-center shadow rounded-2xl">
          <div className="flex items-center justify-center bg-[#F2EFFF] w-16 h-16 md:w-20 md:h-20 rounded-full">
            <Image
              src="/images/bx.png"
              alt=""
              width={45}
              height={45}
              className="w-8 md:w-11 h-8 md:h-11"
            />
          </div>
          <h3 className="text-sm md:text-2xl font-bold mt-5 md:mt-10">Email</h3>
          <p className="text-[#4C4C4C] text-xs md:text-base mt-2.5 md:mt-4">
            www.eduvibe.com
          </p>
        </div>

        <div className="bg-white p-3 md:p-6 text-center flex flex-col items-center justify-center shadow rounded-2xl">
          <div className="flex items-center justify-center bg-[#F2EFFF] w-16 h-16 md:w-20 md:h-20 rounded-full">
            <Image
              src="/images/bx.png"
              alt=""
              width={45}
              height={45}
              className="w-8 md:w-11 h-8 md:h-11"
            />
          </div>
          <h3 className="text-sm md:text-2xl font-bold mt-5 md:mt-10">
            Visit Our Website
          </h3>
          <p className="text-[#4C4C4C] text-xs md:text-base mt-2.5 md:mt-4">
            www.eduvibe.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;
