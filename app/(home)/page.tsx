import React from "react";
import HeroHeader from "./_components/hero-header";
import Reviews from "./_components/reviews_ratings-section";
import PhoneSection from "./_components/phone-section";
import Calender from "./_components/calender-section";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <HeroHeader />
      <Reviews />
      <PhoneSection />
      <Calender />
    </main>
  );
};

export default page;
