import React from "react";
import Image from "next/image";

const services = () => {
  const courses = [
    {
      image: "/images/Frame292.svg",
      heading: "Design & Development",
      text: "50+ Courses Available",
    },

    {
      image: "/images/Frame292.svg",
      heading: "Marketing",
      text: "50+ Courses Available",
    },
    {
      image: "/images/Frame292.svg",
      heading: "Development",
      text: "50+ Courses Available",
    },
    {
      image: "/images/Frame292.svg",
      heading: "Communication",
      text: "50+ Courses Available",
    },

    {
      image: "/images/Frame292.svg",
      heading: "Digital marketing",
      text: "50+ Courses Available",
    },
    {
      image: "/images/Frame292.svg",
      heading: "Self Development",
      text: "50+ Courses Available",
    },
    {
      image: "/images/Frame292.svg",
      heading: "Businesses",
      text: "50+ Courses Available",
    },
    {
      image: "/images/Frame292.svg",
      heading: "Finance",
      text: "50+ Courses Available",
    },

    {
      image: "/images/Frame292.svg",
      heading: "Consulting",
      text: "50+ Courses Available",
    },
  ];

  return (
    <div className="h-auto">
      <div className=" md:h-auto flex flex-col justify-center items-center gap-5 my-10 ">
        <div>
          <h1 className="text-[32px] md:text-[48px] font-bold md:tracking-tighter text-center">Explore Courses By Category</h1>
          <p className="text-center md:selt-start px-8 md:px-0 mt-3 md:mt-0">
            {" "}
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>
      </div>

      {/* course Section */}
      <div className="h-auto px-6 py-4 space-y-6 flex flex-wrap justify-center items-center gap-10">
        {courses.map((course, index) => (
          <div key={index} className="flex w-[450.67px] h-[132px] bg-smokey rounded-md">
            <div className="p-4">
              <Image
                src={"/images/Frame292.svg"}
                alt="next-image"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col ml-2 justify-center">
              <p className="font-semibold text-[20px] leading-[30px] ">
                {course.heading}
              </p>
              <p className="font-normal text-[18px] leading-[27px]">
                {course.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-14">
        <button className="text-sblack py-1 px-2 font-normal text-[16px] w-[155px] h-[48px] rounded-md border-[1px] border-black p-4">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default services;
