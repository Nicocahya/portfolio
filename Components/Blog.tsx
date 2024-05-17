import { ChatBubbleLeftRightIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import React from "react";

const Blog = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        MY <span className="text-yellow-400">BLOG</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        <div>
          <div className="w-[100%] relative">
            <img src="/images/blog1.jpg" alt="blog" className="object-cover" />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[1.7rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">October 9,2020</div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-2">
              <div className="flex items-center space-x-0">
                <UserCircleIcon className="w-[1.8rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Nico</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Comment(12)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">Next Js Fullstack Development</p>
          </div>
        </div>
        <div>
          <div className="w-[100%] relative">
            <img src="/images/blog2.jpg" alt="blog" className="object-cover" />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[1.7rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">Agustus 1, 2021</div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-2">
              <div className="flex items-center space-x-0">
                <UserCircleIcon className="w-[1.8rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Nico</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Comment(2)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">Next Js Fullstack Development</p>
          </div>
        </div>
        <div>
          <div className="w-[100%] relative">
            <img src="/images/blog3.jpg" alt="blog" className="object-cover" />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[1.7rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">February 15, 2022</div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-2">
              <div className="flex items-center space-x-0">
                <UserCircleIcon className="w-[1.8rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Nico</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Comment(10)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">Next Js Fullstack Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;