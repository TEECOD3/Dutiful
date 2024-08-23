import React from "react";
import calender from "@/public/images/Calendar.png";
import time from "@/public/images/time.png";
import circles from "@/public/images/Frame723.png";
import Image from "next/image";

type Props = {};

const Calender = (props: Props) => {
  return (
    <section className="flex flex-col-reverse gap-y-10 lg:flex-row container w-full min-h-[40vh] mx-auto  py-20">
      <div className="w-full lg:w-[60%] flex items-center flex-row">
        <div className="w-full">
          <Image
            src={circles}
            alt="phone-image"
            className="z-10  max-lg:rounded-3xl w-[500px]"
            priority
            height={300}
            width={1000}
          />
          <Image
            src={calender}
            alt="hero-image"
            className="w-[500px]"
            priority
            height={100}
            width={1000}
          />
        </div>
        <div className=" w-full">
          <Image
            src={time}
            alt="phone-image"
            className="z-10  max-lg:rounded-3xl w-[300px]"
            priority
            height={300}
            width={1000}
          />
        </div>
      </div>
      <div className="w-full flex-1">
        <div className="w-full flex flex-col gap-y-4 h-full  mt-6">
          <h1 className=" text-2xl md:text-4xl font-RecoletaAlt text-dark_primary ">
            Accept and sell appointments
          </h1>
          <p className="text-light_gray max-w-[90%]">
            Let customers book their own appointment or consultation. Start
            accepting payments for appointments through your booking page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calender;
