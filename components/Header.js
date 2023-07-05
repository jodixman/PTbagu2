import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Tech from "../assets/tech.png"
import MobileNav from "./MobileNav"


const Header = () => {
  return (
    <div className='flex flex-row mx-auto gap-x-4 md:justify-center items-center fixed -translate-x-1/2 left-1/2 top-0 shadow-md px-3 py-5 w-full bg-black font-bold justify-between'>
      <Image src={Tech} width={100} height={100}/>
        <div className='hidden md:flex'>
            <Link href="/" className='cursor-pointer  px-2 py-4 text-white hover:opacity-80 transition duration-300' >Home</Link>
            <Link href="/business" className='cursor-pointer  px-2 py-4 text-white hover:opacity-80 transition duration-300'>Business</Link>
            <Link href="/health" className='cursor-pointer  px-2 py-4 text-white hover:opacity-80 transition duration-300'>Health</Link>
            <Link href="/entertaiment" className='cursor-pointer  px-2 py-4 text-white hover:opacity-80 transition duration-300' >Entertaiment</Link>
            <Link href="/technology" className='cursor-pointer  px-2 py-4 text-white hover:opacity-80 transition duration-300'>Technology</Link>
            <Link href="/sport" className='cursor-pointer  px-2 py-4 text-white hover:opacity-80 transition duration-300 z-[99]'>Sport</Link>
        </div>
        <MobileNav/>
    </div>
  )
}

export default Header