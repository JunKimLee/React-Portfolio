import React from 'react'
import Github from '../assets/github.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactIMG from '../assets/react.png';
import Java from '../assets/java-logo-1.png';
import Python from '../assets/Python.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#082f49] text-gray-300'>

    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div>
      <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
      <p className='py-4'> </p>
      </div>
    
    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
      <div>
        <img className='w-20 mx-auto' src={HTML} alt= "HTML icon" />
        <p>HTML</p>
</div>
      <div>
        <img className='w-20 mx-auto' src={CSS} alt= "HTML icon" />
        <p>CSS</p>
</div>
      <div>
        <img className='w-20 mx-auto' src={ReactIMG} alt= "HTML icon" />
        <p>REACT</p>
</div>
      <div>
        <img className='w-20 mx-auto' src={Java} alt= "HTML icon" />
        <p>Java</p>
</div>
      <div>
        <img className='w-20 mx-auto' src={Python} alt= "HTML icon" />
        <p>Python</p>
</div>
      <div>
        <img className='w-20 mx-auto' src={Tailwind} alt= "HTML icon" />
        <p>Tailwind</p>
</div>
      <div>
        <img className='w-20 mx-auto' src={JavaScript} alt= "HTML icon" />
        <p>JavaScript</p>
</div>
      <div>
        <img className='w-20 mx-auto' src={Github} alt= "HTML icon" />
        <p>Github</p>
</div>

      </div>     
    </div>
    </div>
    
  );
};

export default Skills