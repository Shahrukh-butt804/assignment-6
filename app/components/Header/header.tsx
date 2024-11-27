import React from 'react'
import { FaLinkedin,FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const header = () => {
  return (
    <header className="bg-smokey h-[54px] text-sblack flex items-center justify-between px-4 border-2 border-b-black  shadow-inner">
        <div className="box mx-auto flex items-center justify-between w-[1154px] h-[54px]">
        <h1 className="text-bold text-sumera font-normal text-[14px] leading-3">Phone Number: 956 742 455 678  |  Email:info@ddsgnr.com</h1>
        
      <div className="flex items-center space-x-4 h-[24px] w-[132px]">
        <FaFacebook className="h-6 w-6 text-sblack"/>
        <FaInstagram className="h-6 w-6 text-sblack" />
        <FaTwitter className="h-6 w-6 text-sblack"/>
        <FaLinkedin className="h-6 w-6 text-sblack"/>
      </div>
      </div>
    </header>
  )
}

export default header
