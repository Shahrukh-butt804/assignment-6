import React from "react";
import Image from "next/image";

const Team = () => {
  const members = [
    {
      image: "/images/team1.png",
      name: "James nduku",
      post: "Marketing Cordinator",
    },
    {
      image: "/images/team2.png",
      name: "Joseph munyambu",
      post: "Nursing Assistant",
    },
    {
      image: "/images/team3.png",
      name: "Joseph Ngumbau",
      post: "Medical Assistant",
    },
    {
      image: "/images/team4.png",
      name: "Erick Kipkemboi",
      post: " Web Designer",
    },
    {
      image: "/images/team5.png",
      name: "Stephen Kerubo",
      post: "President of Sales",
    },
    {
      image: "/images/team6.png",
      name: "John Leboo",
      post: "Dog Trainer",
    },
  ];
  return (
    <div className=" md:h-[895px] bg-smokey">
      <div className=" md:h-auto flex flex-col justify-center items-center gap-5 my-10">
        <h1 className="text-[56px] font-bold">Our Team</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="flex justify-center items-center gap-10 flex-wrap">
        {members.map((member, index) => (
          <>
            <div
              key={index}
              className="box w-[394.67px] h-[209px] p-4 flex flex-col gap-5 items-center justify-between"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={member.image}
                  alt="Jane Doe"
                  width={80}
                  height={80}
                />
              </div>

              <div>
                {" "}
                <p className="font-semibold text-[20px] leading-[30px] text-center">
                  {member.name}
                </p>
                <p className="font-normal text-[18px] leading-[27px] text-center">
                  {member.post}
                </p>
                <div className="mt-5 flex justify-center">
                  <Image
                    src="/images/Social Icons.svg"
                    alt="Social Icons"
                    width={100}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Team;
