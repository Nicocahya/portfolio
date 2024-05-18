import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'
import Link from 'next/link';

interface Props {
  openNav: () => void;
}
const Nav = ({openNav}:Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 bg-[#141c27] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                WEB
                <span className="text-yellow-300">
                    DEV
                </span>
            </h1>
        <Link href="#home" scroll={false} className="nav-link">
          HOME
        </Link>
        <Link href="#about" scroll={false} className="nav-link">
          ABOUT
        </Link>
        <Link href="#service" scroll={false} className="nav-link">
          SERVICES
        </Link>
        <Link href="#project" scroll={false} className="nav-link">
          PROJECT
        </Link>
        <Link href="#blog" scroll={false} className="nav-link">
          BLOG
        </Link>
        <Link href="#contact" scroll={false} className="nav-link">
          CONTACT
        </Link>
            <div onClick={openNav}>
              <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"/>
            </div>
        </div>
    </div>
  )
}

export default Nav