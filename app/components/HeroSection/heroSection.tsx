import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex justify-center gap-20">


      <div className="mt-[141px]">

        <div className="flex flex-col gap-[24px] w-[500px]">

        <h1 className="text-[56px] font-bold leading-[1.2]">Learn new skills online with ease</h1>
          <p className="text-[18px] line[27px] font-normal">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>

        <div className="flex gap-2 mt-5 text-[16px] font-normal">
          <button className=" px-6 py-3 rounded-md bg-slate-900 text-white">Start Learning Now</button>
          <button className=" px-6 py-3 rounded-md outline-1 outline ">Explore Courses</button>
        </div>
      </div>

      <div>
      <Image
        className=""
        src="/images/heroImage.jpg"
        width={650}
        height={900}
        alt="Picture of the author"
      />
      </div>
    </div>
  );
}
