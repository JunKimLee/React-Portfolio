import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#082f49] flex justify-center items-center p-4'>
    <form method = 'POST' action ='https://getform.io/f/16a8cac1-12ab-40f5-9004-90ef5baad956' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
        </div>
        
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name = 'name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type ="email" placeholder='Email' name = 'email' />
          <textarea className='bg-[#ccd6f6] p-2'  name= "mesage" rows ="10"></textarea>
        
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
    </form>

    </div>
  )
}

export default Contact