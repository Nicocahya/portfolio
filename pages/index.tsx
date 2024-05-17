import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav'
import { useState } from 'react'
import Hero from "@/Components/Hero";
import About from "@/Components/About";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className="overflow-x-hidden">
      <div>
        {/* navbar */}
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav} />
        {/* hero section */}
        <Hero />
      </div>
    </div>
  )
}

export default HomePage