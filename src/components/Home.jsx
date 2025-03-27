import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-[url('../src/assets/cover.png')] bg-cover flex items-center">
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-2xl'>Hello, I'm</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-yellow-300'> Tharan Bala</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#00000] whitespace-nowrap '>Software Engineer.</h2>
          <div>
            <Link to="about" smooth={true} duration={500}>
              <button className='text-black border-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-300'>
                  View Profile 
                  <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
              </button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Home