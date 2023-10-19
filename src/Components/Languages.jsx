import React from 'react';
import America from '../assets/America.png';
import Korean from '../assets/Korean.png';
import Paraguay from '../assets/Paraguay.png';

function Languages() {
  return (
    <div name='languages' className='w-full h-screen bg-[#082f49] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Languages</p>
          <p className='py-4'></p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div>
            <img className='w-32 mx-auto' src={America} alt="American icon" />
            <p>English</p>
          </div>
          <div>
            <img className='w-32  mx-auto' src={Korean} alt="Korean icon" />
            <p>Korean</p>
          </div>
          <div>
            <img className='w-32 mx-auto' src={Paraguay} alt="Paraguay icon" />
            <p>Spanish</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;

