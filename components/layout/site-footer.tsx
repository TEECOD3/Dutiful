import React from "react";
import { Facebook } from "../custom-icons/facebook";
import { Instagram } from "../custom-icons/instagram";
import { Twitter } from "../custom-icons/twitter";
import { Youtube } from "../custom-icons/youtube";
import { Linkedin } from "../custom-icons/linkedin";
import { Apple } from "../custom-icons/apple";
import { Playstore } from "../custom-icons/playstore";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-auto bg-primary min-h-[50vh] py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-4 w-full gap-x-20">
          <div className="">
            <h3 className="text-white  text-base lg:text-xl">
              {" "}
              {companyLinks.name}
            </h3>
            <ul className="text-[#B6B6E5] mt-5 flex-col flex gap-y-2">
              {companyLinks.links.map((link) => (
                <li key={link.name}>{link.name}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="text-white text-base lg:text-xl">
              {" "}
              {quickLinks.name}
            </h3>
            <ul className="text-[#B6B6E5] mt-5 flex-col flex gap-y-2">
              {quickLinks.links.map((link) => (
                <li key={link.name}>{link.name}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="text-white  text-base lg:text-xl">
              {" "}
              {Resources.name}
            </h3>
            <ul className="text-[#B6B6E5] mt-5 flex-col flex gap-y-2">
              {Resources.links.map((link) => (
                <li key={link.name}>{link.name}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="text-white  text-base lg:text-xl"> {More.name}</h3>
            <ul className="text-[#B6B6E5] mt-5 flex-col flex gap-y-2">
              {More.links.map((link) => (
                <li key={link.name}>{link.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:hidden flex gap-x-9 items-center  text-white/60  mt-10 text-[12px] ">
          <span>Terms of Service</span>
          <span>Privacy policy</span>
          <span>Disclaimer</span>
        </div>

        <div className="h-[1px] w-full bg-[#B6B6E5]/20 mt-10"></div>

        <div className="flex flex-col-reverse gap-y-4 lg:flex-row justify-between mt-10">
          <div className="flex items-center gap-x-6">
            <span className="text-white text-base lg:text-xl">Follow us</span>
            <div className="flex gap-x-6 lg:gap-x-9 items-center">
              <Facebook className="size-6" />
              <Instagram className="size-4" />
              <Twitter className="size-5" />
              <Youtube className="size-5" />
              <Linkedin className="size-4" />
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#B6B6E5]/20 mt-10 lg:hidden"></div>
          <div className="flex items-center gap-x-6">
            <span className="text-white  text-base lg:text-xl">
              Download the app
            </span>
            <div className="flex gap-x-9 items-center">
              <Apple className="size-6" />
              <Playstore className="size-5" />
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#B6B6E5]/20 mt-8"></div>

        <div className="flex flex-col lg:flex-row gap-y-4  lg:items-center gap-x-20 mt-10 max-lg:w-full max-lg:justify-center max-lg:items-center">
          <span className="text-white/80 font-light text-base">
            &copy; {new Date().getFullYear()} Dutiful &reg;
          </span>
          <div className="lg:flex gap-x-9 items-center text-sm text-white/60 hidden ">
            <span>Terms of Service</span>
            <span>Privacy policy</span>
            <span>Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const companyLinks = {
  name: "Company",
  links: [
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
    { name: "FAQ", link: "/" },
  ],
};

const quickLinks = {
  name: "Quick Links",
  links: [
    { name: "Find services", link: "/" },
    { name: "Pricing & plans", link: "/" },
    { name: "List Your business", link: "/" },
  ],
};

const Resources = {
  name: "Resources",
  links: [
    { name: "Blogs", link: "/" },
    { name: "Affliate programs", link: "/" },
    { name: "List Your business", link: "/" },
  ],
};

const More = {
  name: "More About Dutiful",
  links: [{ name: "Dutiful join", link: "/" }],
};
