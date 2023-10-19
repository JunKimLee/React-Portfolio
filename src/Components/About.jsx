import React from 'react';

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#082f49] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full p-4">
         
          <div className="pb-8">
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About Me</p>
          </div>
          <div>
            <p className='text-2xl'>
            Born and raised in Paraguay, the first decade of my life was mixed with the country's culture, from chaos in Asunción markets to rural landscapes. Paraguay has a special place in my heart, many friends I made, my first goal in my school soccer team, and more. It's the foundation of my identity that combines with my Korean roots, from having Kimchi in the fridge to having empanadas de choclo (corn). Moving to the United States at 10 was a culture shock for me, with difficulty learning English and making friends at school. So I got into Video Games, which sparked my interest in the tech industry, wondering how video games are made, which led me to declare my degree in Computer Science. But I realized after going through my degree, that web development has intrigued me more. Learning how to make functional websites has led me to where I am today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;



