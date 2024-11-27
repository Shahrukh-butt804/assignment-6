import React from 'react';

const Achievements = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-6">
      
      <h5 className="font-bold text-[32px] md:text-[48px] leading-[57.6px] text-center">
        Our Achievements
      </h5>

      <div className="w-[95%] max-w-[1152px] p-4">
        <p className="font-normal text-[18px] leading-[27px] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          suscipit veniam magni error quas, itaque distinctio sunt. Nulla
          facilis magnam adipisci, officia eaque pariatur sunt repudiandae
          ullam. Totam, quod et.
        </p>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-2  w-full">
        
        <div className="flex items-center flex-col w-[175px] md:w-[296px] h-24 p-4">
          <h3 className="font-bold text-[20px] md:text-[40px] leading-[27px] text-center">+200</h3>
          <p className="font-normal text-[16px] md:text-[18px] leading-[48px] text-center">Courses</p>
        </div>
        
        <div className="flex items-center flex-col w-[175px] md:w-[296px] h-24 p-4">
          <h3 className="font-bold text-[20px] md:text-[40px] leading-[27px] text-center">50K</h3>
          <p className="font-normal text-[16px] md:text-[18px] leading-[48px] text-center">Mentors</p>
        </div>

        <div className="flex items-center flex-col w-[175px] md:w-[296px] h-24 p-4">
          <h3 className="font-bold text-[20px] md:text-[40px] leading-[27px] text-center">370K</h3>
          <p className="font-normal text-[16px] md:text-[18px] leading-[48px] text-center">Students</p>
        </div>
        
        <div className="flex items-center flex-col w-[175px] md:w-[296px] h-24 p-4">
          <h3 className="font-bold text-[20px] md:text-[40px] leading-[27px] text-center">+100</h3>
          <p className="font-normal text-[16px] md:text-[18px] leading-[48px] text-center">Recognition</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
