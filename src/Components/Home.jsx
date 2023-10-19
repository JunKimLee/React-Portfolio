import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function Home() {
  return (
    <div name = 'home' className='w-full h-screen bg-[#082f49]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>Jun (Daniel) Kim</h1>
        <h2 className='text-4xl sm:text-3xl font-bold text-[#8892b0]'>Graduating from East Carolina University Fall 2023</h2>
        <p className='text-[#8892b0] text-2xl py-4 max-w-[700px]'>
          I am eager to join a software engineering team. I want to work collaboratively with talented individuals, using my skills and knowledge to contribute to the development of exceptional software solutions. Being part of such a team would allow me to solve challenging problems, continuously learn and improve, and thrive in a supportive and dynamic environment.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
