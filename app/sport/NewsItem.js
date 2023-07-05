import React from 'react'
import Image from "next/image"
import Link from "next/link"


//3. Langah ketiga masukin newList ke dalam NewsItem
const NewsItem = ({title, description, url, urlToImage, author,time}) => {
  return (
    <div className=''>
        <Link href={url} className='cotainer mx-auto justify-center items-start max-w-[80rem] flex flex-row mt-10 shadow-md py-5 px-2 cursor-pointer hover:opacity-80 transition duration-300'>
            <Image alt={url} src={urlToImage}  width={300} height={300}
            className='mr-10 self-center'/>
            <div>
              <p className='text-[#EBCB91] font-semibold pb-1 text-xl'>{author}</p>
              <h3 className='text-3xl text-slate-800 font-bold pb-3'><Link href={url}>{title}</Link></h3>
              <h3 className='text-black-500 text-[17px] pb-10'><Link href={url}>{description}</Link></h3>
              <p>{time}</p>
            </div>
        </Link>
    </div>
  )
}

export default NewsItem