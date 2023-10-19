import React from 'react';
import Github from '../assets/github.png';

function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#082f49]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-500'> Work </p>
          <p className='py-6'> {/* Some of my work */} </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Video 1 */}
          <div className='video-container'>
            <iframe
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/kig5eTUlGvc'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <p className='text-center py-2'>Sandman Project</p>
          </div>

          {/* Video 2 */}
          <div className='video-container'>
            <iframe
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/BegNDJ2IRJ0'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <p className='text-center py-2'>What's For Lunch Project</p>
          </div>
        </div>

        {/* GitHub Section */}
        <div className='text-center pt-8'>
          <a href='https://github.com/JunKimLee'>
            <img className='w-50 mx-auto' src={Github} alt='GitHub icon' />
          </a>
          <p className='w-100 mx-auto'>Github</p> {/* Center-align text horizontally */}
        </div>
      </div>
    </div>
  );
}

export default Work;





