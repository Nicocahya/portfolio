import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav'
import { useState } from 'react'
import Hero from "@/Components/Hero";
import About from '@/Components/About';
import Services from '@/Components/Services';
import Skils from '@/Components/Skils';
import Projects from '@/Components/Projects';
import Testimonial from '@/Components/Testimonial';
import Blog from '@/Components/Blog';
import Footer from '@/Components/Footer';

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

// animation ads setup

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* navbar */}
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav} />
        {/* hero section */}
        <Hero />
        <div className='relative z-[30]'>
          {/* About */}
          <About />
          <div>
            {/* services */}
            <Services />
            {/* Skils */}
            <Skils />
            {/* Projects */}
            <Projects />
            {/* Testimonial */}
            <Testimonial />
            {/* Blog */}
            <Blog />
            {/* footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage