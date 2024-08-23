import Image from "next/image";
import React from "react";
import firstimage from "@/public/images/questions.png";
import secondimage from "@/public/images/Frame5.png";
import thirdimage from "@/public/images/Frame7.png";
import phone from "@/public/images/phone-bgremoved.png";

type Props = {};

const PhoneSection = (props: Props) => {
  return (
    <section className="min-h-[60vh]  bg-gray-50 py-20 rounded-xl flex flex-col lg:flex-row container relative gap-x-9 mx-auto mt-10 overflow-hidden">
      <Image
        src={phone}
        alt="phone-image"
        className="absolute hidden  lg:block lg:h-[800px] w-full -top-20 lg:-ml-44 z-10 object-contain  max-lg:rounded-3xl"
        priority
        height={1000}
        width={1000}
      />
      <div className="w-full lg:w-[60%] bg-primary rounded-2xl relative h-96 lg:h-[600px]">
        <Image
          src={phone}
          alt="phone-image"
          className="absolute h-full top-0 left-0 w-full scale-150  lg:hidden ml-10 z-10 object-contain  max-lg:rounded-3xl"
          priority
          height={1000}
          width={1000}
        />
      </div>
      <div className="w-full flex-1 relative max-lg:-mt-10">
        <Image
          src={firstimage}
          alt="hero-image"
          className=" max-sm:w-full max-sm:h-44 max-lg:rounded-3xl max-lg:object-contain"
          priority
          height={100}
          width={400}
        />
        <Image
          src={secondimage}
          alt="hero-image"
          className="max-sm:w-full max-sm:h-44  max-lg:rounded-3xl max-lg:object-contain lg:-ml-24"
          priority
          height={100}
          width={400}
        />
        <Image
          src={thirdimage}
          alt="hero-image"
          className="max-sm:w-full max-sm:h-44  max-lg:rounded-3xl max-lg:object-contain"
          priority
          height={100}
          width={400}
        />
      </div>
    </section>
  );
};

export default PhoneSection;
