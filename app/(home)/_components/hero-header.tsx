import Image from "next/image";
import React from "react";
import heroimage from "@/public/images/Dashboard.png";

type Props = {};

const HeroHeader = (props: Props) => {
  return (
    <section className="flex  py-10 gap-y-8 lg:pt-44 container min-h-[80vh]  lg:justify-center gap-x-10 flex-col lg:flex-row">
      <div className="w-full flex flex-col gap-y-4 h-full">
        <h1 className=" text-2xl md:text-4xl font-RecoletaAlt text-dark_primary max-w-[80%]">
          List and grow your business  with just few clicks
        </h1>
        <p className="text-light_gray max-w-[90%]">
          Eliminate manual work and save time by listing your business or
          service on the best business directory in Nigeria.
        </p>
      </div>
      <div className="w-full relative h-full ">
        <div className="h-56 max-lg:mt-40 sm:h-[400px] w-full bg-primary rounded-3xl"></div>
        <Image
          src={heroimage}
          alt="hero-image"
          className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-y-[63%]  max-sm:size-96 max-lg:rounded-3xl max-lg:object-contain"
          priority
          height={200}
          width={450}
        />
      </div>
    </section>
  );
};

export default HeroHeader;
