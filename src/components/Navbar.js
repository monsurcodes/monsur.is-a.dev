"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`flex flex-col sm:flex-row justify-between items-center w-full mx-auto py-5 px-10 sm:px-40 sticky top-0  transition-shadow duration-200 z-50
        ${hasScrolled ? 'border-b-1 border-slate-700 shadow-lg bg-black' : 'bg-slate-950'}`}
    >
      <div className='text-green-600 text-3xl font-semibold'>
        <a href="/">monsurcodes</a>
      </div>
      <ul className='flex sm:gap-7 gap-2 text-slate-400'>
        <li className='hover:text-white hover:cursor-pointer hover:animate-pulse'><Link href="#about">About</Link></li>
        <li className='hover:text-white hover:cursor-pointer hover:animate-pulse'><Link href="#projects">Projects</Link></li>
        <li className='hover:text-white hover:cursor-pointer hover:animate-pulse'><Link href="#skills">Skills</Link></li>
        <li className='hover:text-white hover:cursor-pointer hover:animate-pulse'><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;