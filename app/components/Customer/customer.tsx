import React from 'react';
import Image from 'next/image';

const Customer = () => {
  return (
    <div className=" md:h-[830.89px] bg-white">
 
      <div className=" md:h-auto flex flex-col justify-center items-start px-32 gap-2 my-10">
        <h1 className="text-[56px] font-bold">Customer Testimonials</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      {/* Testimonial Boxes in a Single Row */}
      <div className="flex justify-center flex-wrap gap-9 px-16">
        {/* Testimonial 1 */}
        <div className="h-[321.89px] w-[392.67px] border-[1px] border-black flex flex-col justify-between p-4">
          <div>
            <Image src="/Stars.svg" alt="Stars" width={116} height={18.89} />
          </div>
          <p className="text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, placeat! Recusandae inventore ducimus ullam, provident dolorum, corporis dolorem tempore nesciunt nemo distinctio eligendi vel dicta placeat modi architecto voluptate voluptatum.
          </p>
          <div className="flex justify-center">
            <Image src="/james.svg" alt="James" width={254} height={56} />
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="h-[321.89px] w-[392.67px] border-[1px] border-black flex flex-col justify-between p-4">
          <div>
            <Image src="/Stars.svg" alt="Stars" width={116} height={18.89} />
          </div>
          <p className="text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, placeat! Recusandae inventore ducimus ullam, provident dolorum, corporis dolorem tempore nesciunt nemo distinctio eligendi vel dicta placeat modi architecto voluptate voluptatum.
          </p>
          <div className="flex justify-center">
            <Image src="/james.svg" alt="James" width={254} height={56} />
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="h-[321.89px] w-[392.67px] border-[1px] border-black flex flex-col justify-between p-4">
          <div>
            <Image src="/Stars.svg" alt="Stars" width={116} height={18.89} />
          </div>
          <p className="text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, placeat! Recusandae inventore ducimus ullam, provident dolorum, corporis dolorem tempore nesciunt nemo distinctio eligendi vel dicta placeat modi architecto voluptate voluptatum.
          </p>
          <div className="flex justify-center">
            <Image src="/james.svg" alt="James" width={254} height={56} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
