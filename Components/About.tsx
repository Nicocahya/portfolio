import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div className="">
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">About me</h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[40px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quam est quia non quasi nulla totam adipisci laudantium itaque perspiciatis, dolorem id deserunt! Deleniti, minus?
            </p>
          </div>
          <button className="px-[1.3rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
            <p className="">Download Cv</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        <div className="lg:w-[350px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <img src="images/about.jpg" alt="user" layout="fill" objectFit="contain" className="relative z-[11] w-[100%] object-contain" />
          <div className="absolute w-[100%] h-[70%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;