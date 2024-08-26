import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-auto bg-[#1E1E1E] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/jawxlrqb" method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-300 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below to contact me</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-yellow-300 hover:border-yellow-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
            <p className='text-gray-300 px-4 py-3 my-8 mx-auto'>© Tharan Bala, All Rights Reserved</p>
        </form>
    </div>
  )
}

export default Contact