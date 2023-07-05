"use client"
import React, { useState } from 'react'
// import icon
import {IoMdClose} from "react-icons/io"
import {CgMenuRight} from "react-icons/cg"
// import Link
import Link from "next/link"
// import motion
import { motion } from "framer-motion"



const MobileNav = () => {
  //motion
  const menuVariants ={
    hidden: {
      x: '100%',
    },
    show: {
      x:0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className='text-primary xl:hidden'>
      {/*====== Burger Open ======*/}
      <div 
      onClick={() => setOpenMenu(true)}
      className='text-3xl cursor-pointer'>
        <CgMenuRight className='text-white md:hidden flex'/>
      </div>

      {/*====== Menu ======*/}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ''}
      className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>

        {/* Burger Close */}
        <div 
        onClick={() => setOpenMenu(false)}
        className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
          <IoMdClose />
        </div>

        {/* menu list */}
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary fony-bold text-3xl'>
            <Link href="/" className='cursor-pointer  text-black hover:opacity-80 transition duration-300' >Home</Link>
            <Link href="/business" className='cursor-pointer  text-black hover:opacity-80 transition duration-300'>Business</Link>
            <Link href="/health" className='cursor-pointer  text-black hover:opacity-80 transition duration-300'>Health</Link>
            <Link href="/entertaiment" className='cursor-pointer  text-black hover:opacity-80 transition duration-300' >Entertaiment</Link>
            <Link href="/technology" className='cursor-pointer   text-black hover:opacity-80 transition duration-300'>Technology</Link>
            <Link href="/sport" className='cursor-pointer text-white hover:opacity-80 transition duration-300 z-[99]'>Sport</Link>
        </ul>
      </motion.div>
    </nav>
  )
}

export default MobileNav