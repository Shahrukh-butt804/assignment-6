import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-smokey h-[72px] text-sblack flex items-center justify-between px-4 border-b-[1px] border-sblack shadow-inner mt-4">


      <div className="box1 mx-auto flex items-center justify-between w-[1152px] h-[44px]">
      <div className="mr-2"> 
        <Image src={"/images/Frame 1.svg"} alt="next-image" width={32.58} height={30.38}/>
        </div>
        <h1 className="text-[25.07px] leading-[30.34px] font-bold w-[130.6px] h-[29.38px]">Ddsgnr</h1>

        <div className="box2 ml-10 h-[44px] w-[850px] bg-swhite">
      <nav>
        <ul className="flex space-x-12 items-center justify-between p-[8px] text-sblack font-normal text-[16px] leading-[24px] h-[44px] w-[687px]">
            <li><Link href="home" className="underline">Home</Link></li>
            <li><Link href="courses" >Courses</Link></li>
            <li><Link href="services">Services</Link></li>
            <li><Link href="achievement">Achievevment</Link></li>
            <li><Link href="about">About us</Link></li>
            <li><Link href="testimonials">Testimonials</Link></li>
        </ul>
      </nav>
      </div>
      <div className="box2 flex space-x-2 h-[44px] w-[191px] gap-5">
      <button className="text-sblack py-1 px-2 font-normal text-[16px] w-[80px] h-[44px] rounded-md border-[1px] border-black p-4">Login</button>
      <button className="text-swhite py-1 px-2 font-normal text-[16px] w-[95px] h-[44px] rounded-md border-[1px] border-black p-4 bg-sblack">Sign Up</button>
      </div>
      </div>
    </div>
  )
}

export default Header
