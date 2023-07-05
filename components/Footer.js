import React from 'react'
import Link from "next/link"
import {BsFacebook,BsLinkedin} from "react-icons/bs"
import {AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai"

const Footer = () => {
  return (
    <div className='flex flex-row mx-auto gap-x-4 justify-center items-center shadow-md px-3 py-5 w-full bg-slate-800 font-bold text-white flex-wrap '>
        <div className='flex flex-col justify-start md:flex-row gap-x-[20rem] md:justify-center md:gap-y-0 gap-y-10 items-start w-full flex-wrap'>

            <div className='flex flex-col justify-center items-start'>
                <h1 className='text-3xl font-bold'>Category</h1>
                <div className='flex flex-col mt-5 gap-y-3'>
                    <Link href="/" className='hover:opacity-80 transition duration-200'>Home</Link>
                    <Link href="/business" className='hover:opacity-80 transition duration-200'>Business</Link>
                    <Link href="/health" className='hover:opacity-80 transition duration-200'>Health</Link>
                    <Link href="/technology" className='hover:opacity-80 transition duration-200'>Technology</Link>
                    <Link href="/sport" className='hover:opacity-80 transition duration-200'>Sport</Link>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold'>Contact</h1>
                <div className='grid grid-cols-2 gap-x-10 gap-y-5 mt-5 text-2xl'>
                    <Link href="/" className='hover:opacity-80 transition duration-200'><BsFacebook/></Link>
                    <Link href="/" className='hover:opacity-80 transition duration-200'><BsLinkedin/></Link>
                    <Link href="/" className='hover:opacity-80 transition duration-200'><AiFillInstagram /></Link>
                    <Link href="/" className='hover:opacity-80 transition duration-200'><AiFillTwitterCircle /></Link>
                </div>
            </div>

            <div className='flex flex-col justify-center items-start'>
                <h1 className='text-3xl font-bold'>Other</h1>
                <div className='flex flex-col mt-5 gap-y-3'> 
                    <Link href="/" className='hover:opacity-80 transition duration-200'>About</Link>
                    <Link href="/" className='hover:opacity-80 transition duration-200'>FAQ</Link>
                    <Link href="/" className='hover:opacity-80 transition duration-200'>Misi</Link>
                    <Link href="/" className='hover:opacity-80 transition duration-200'>Vicion</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer