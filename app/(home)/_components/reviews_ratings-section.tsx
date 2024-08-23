import Image from "next/image";
import React from "react";
import ReviewsEllipse from "@/public/images/Ellipse30.png";
import ReviewCardImage from "@/public/images/2353e9e30deeb2246ba0a3f3de464ce7-sticker1.png";
import { Star } from "@/components/custom-icons/star";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <section className="items-center justify-center min-h-[70vh] container mt-16 relative">
      <div className="w-[60%] h-[800px] relative max-lg:hidden">
        <Image
          src={ReviewsEllipse}
          alt="hero-image"
          className="object-cover "
          priority
          fill
        />
      </div>

      <div className="w-full flex gap-y-3 flex-col lg:absolute top-0 left-0 ">
        <div className="w-full lg:w-[60%] lg:absolute lg:top-20 lg:h-[500px] max-lg:space-y-5">
          <div className="lg:absolute top-0 left-0 z-[2] lg:-rotate-12">
            <Reviewcard />
          </div>
          <div className="lg:absolute top-[20%] right-0 z-[2] lg:rotate-12">
            <Reviewcard />
          </div>
          <div className="lg:absolute  bottom-0 z-[2] left-20">
            <Reviewcard />
          </div>
        </div>

        <div className="lg:absolute right-0  w-full  lg:w-[35%] lg:h-[500px]">
          <div className="w-full flex flex-col gap-y-4 h-full lg:absolute justify-center mt-6">
            <h1 className=" text-2xl md:text-4xl font-RecoletaAlt text-dark_primary ">
              Collect reviews and ratings from customers
            </h1>
            <p className="text-light_gray max-w-[90%]">
              Accelerate your business reputation by 90% and gain social
              proof through reviews and ratings requested from customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

function Reviewcard() {
  return (
    <div className="p-8 bg-white space-y-2 relative z-[20] w-full lg:w-[400px] rounded-lg ring-1">
      <div className="flex gap-x-4 items-center">
        <Image
          src={ReviewCardImage}
          alt="review-image"
          className="rounded-full"
          priority
          height={50}
          width={50}
        />
        <p>Adeola Fotoyinbo</p>
      </div>
      <div className="flex items-center gap-x-1">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>

      <p className="text-light_gray">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo corporis,
        omnis odio, magni illum sunt nesciunt officia mollitia necessitatibus
        eos inventore
      </p>
    </div>
  );
}
