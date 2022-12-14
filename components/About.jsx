import React from "react";
// import Image from "next/image";
// import aboutLogo from '../public/assets/about/aboutLogo.png'

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 items-center py-16 mb-0  mt-30"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#15a8fd]">
            
          </p>
          <h2 className="py-4"></h2>
          <p className="py-2 text-gray-600">
            
          </p>
          {/* <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p> */}
        </div>
        
      </div>
    </div>
  );
};

export default About;
