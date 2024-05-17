import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url(/images/banner.jpg)] bg-center ">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[45px] sm:text-[25px] text-white font-bold">
            HELLO, SAYA <span className="text-yellow-400">NICO</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur quod aliquid rem velit laborum architecto dolorum, repellendus, aliquam, tempora ipsum dolorem excepturi magni ea.
          </p>
        </div>
        <div className="w-[350px] hidden bg-[55e6a5] mt-[1rem] relative lg:flex items-center rounded-full h-[350px]">
          <img src="images/profile.jpg" alt="user" layout="fill" className="object-cover ml-[5rem] rounded-full" />
        </div>
        <div className="mt-[-5rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
          <button className="px-[1.2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] md:text-[14px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
            <p className="">Download App</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
          <button className="flex items-center space-x-2">
            <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
            <p className="text-[20px] font-semibold text-white">Watch The Video</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;