import React from "react";
import Image from "next/image";

const courses = () => {
  const courses = [
    {
      image: "/images/card1.png",
      about: "design",
      title: "UI/UX Design 201",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quibusdam totam ?",
      price: "$400",
    },

    {
      image: "/images/card2.png",
      about: "programming",
      title: "Introduction to python",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quibusdam totam ?",
      price: "$400",
    },
    {
      image: "/images/card3.png",
      about: "business",
      title: "Data Analysis for Beginners",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quibusdam totam ?",
      price: "$400",
    },
    {
      image: "/images/card4.png",
      about: "Art",
      title: "Art Specialization",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quibusdam totam ?",
      price: "$400",
    },
    {
      image: "/images/card5.png",
      about: "Law",
      title: "Rule of Law",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quibusdam totam ?",
      price: "$400",
    },
    {
      image: "/images/card6.png",
      about: "Tech",
      title: "Introduction To Webflow",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quibusdam totam ?",
      price: "$400",
    },
  ];

  return (
    <>
      <div className=" md:h-auto flex flex-col justify-center items-center gap-5 my-10">
        <h1 className="text-[56px] font-bold">Courses</h1>
        <p>The ultimate Guide to learning</p>
      </div>

      <div className="flex justify-center items-center gap-5 my-10">
        <h1 className="border-2 border-b-black w-fit">Popular</h1>
        <h1>Recommended</h1>
        <h1>Best price</h1>
      </div>

      <div className="h-full md:h-[1742px] flex gap-[32px] justify-center flex-wrap p-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="w-[416px] h-[534px] rounded-[15px] flex flex-col gap-[20px] bg-[#f7f7f7]"
          >
            <div>
              <Image
                className="h-[316px] w-[500px]"
                src={course.image}
                alt="next-image"
                width={416}
                height={300}
              />
            </div>

            <div>
              <div className="flex justify-between items-center  text-[14px] font-semibold px-3">
                <p>{course.about}</p>
                <div>
                  <Image
                    src={"/images/Star.png"}
                    alt="next-image"
                    width={50}
                    height={50}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2 px-3">
                <h1 className="text-[24px] font-bold">{course.title}</h1>
                <p className="text-[16px] font-normal">{course.text}</p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-5 px-3 ">
              <button className="text-sblack py-1 px-8 font-normal text-[16px] w-[180px] h-[44px] rounded-md border-[1px] border-black p-4 hover:bg-slate-200">
                Enroll Now
              </button>
              <h2>{course.price}</h2>
            </div>
          </div>
        ))}
        <button className="text-sblack py-2 px-4 font-normal text-[16px] w-[160px] h-[49px] rounded-md border-[1px] border-sblack p-4 md:mt-[-160px]">
          View All Courses
        </button>
      </div>
    </>
  );
};

export default courses;
