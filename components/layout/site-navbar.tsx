import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/Svg/Logo.svg";
import { siteConfig } from "@/config/site";
import Search from "../custom-icons/search";
import { Button } from "../ui/button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex container mx-auto py-6 justify-between items-center">
      <Link href="/" className="lg:w-[25%]">
        <Image
          src={logo}
          alt="website_Logo"
          className=""
          height={50}
          width={100}
          priority
        />
      </Link>

      <nav className="">
        <ul className=" hidden md:flex justify-between gap-x-16 text-light_gray text-base items-center">
          <li>
            <Search />
          </li>
          {siteConfig.routes.map((route) => (
            <li
              key={route.name}
              className="hover:underline hover:decoration-primary/60 transition-all duration-150 ease-in-out hover:underline-offset-4 hover:decoration-[2px]"
            >
              <Link href={route.link}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden lg:flex gap-x-4">
        <Button
          className="px-10 py-5 text-primary capitalize"
          variant={"ghost"}
        >
          login
        </Button>
        <Button
          className="px-10 py-5 border-primary border-[2px] capitalize"
          variant={"outline"}
        >
          sign up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
