"use client"

import Link from 'next/link';

const Navbar = () => {

  return (
    <nav
      className="flex flex-col sm:flex-row justify-between items-center w-full mx-auto py-5 px-10 sm:px-40 sticky top-0  transition-shadow duration-200 z-50 bg-slate-950 shadow-lg backdrop-blur-md shadow-gray-900"
    >
      <div className='text-green-600 text-3xl font-semibold'>
        <Link href="/">monsur.is-a.dev</Link>
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