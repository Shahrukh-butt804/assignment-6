import React from 'react'
import Image from 'next/image'

const footer = () => {
  return (
    <div className="flex overflow-hidden flex-col md:flex-row h-[228px] bg-smokey border-t-[1px] border-sblack px-2 md:px-10">


      <h5 className="font-bold text-sblack w-[340px] h-[68px] text-[24px] leading-[33.6px] py-20">Trusted by 2000+ companies worldwide</h5>


      <div className="flex w-[880px] h-[56] md:ml-20">
    <Image src={"/images/Logos.svg"} alt="next-image" width={880} height={56}/>
    </div>


    </div>
  )
}

export default footer
