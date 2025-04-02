"use client"; 
import React from "react"; 
import Image from "next/image";  

const Hero = () => {   
  return (     
    <section className="relative w-full h-[550px] md:h-screen mx-auto">       
      <div className="paddingX absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-0 md:gap-5">         
        <div className="flex-1 flex flex-col mb-0">           
          <div className="flex flex-row items-start gap-5 ">             
            <div className="hidden sm:flex flex-col justify-center items-center ">               
              <div className="w-5 h-5 rounded-full bg-[#915EFF] " />               
              <div className="w-1 sm:h-50 h-40 violet-gradient" />             
            </div>             
            <div className="text-center sm:text-left mt-3 md:mt-0">               
              <h1 className="heroHeadText text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl">                 
                Hi, I&apos;m <span className="text-[#915EFF]">Nihal</span>               
              </h1>               
              <p className="heroSubText mt-2 md:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
                A MERN Stack Developer
              </p>
			             
            </div>           
          </div>         
        </div>          
        
        <div className="flex-1 flex justify-center items-center mt-0 md:mt-0">           
          <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">             
            <Image               
              src="/image.jpg"               
              alt="Developer portrait"               
              fill
              priority
              className="rounded-full border-4 border-[#915EFF] object-cover"             
            />           
          </div>         
        </div>       
      </div>     
    </section>   
  ); 
};  

export default Hero;