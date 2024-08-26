import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import {motion} from 'framer-motion'

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0, 
    opacity: 1, 
    transition: {duration: 0.5, delay: delay},
  },
});

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-[url('../src/assets/cover.png')] bg-cover flex items-center">
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-2xl'>Hello, I'm</p>
          <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='text-4xl sm:text-7xl font-bold text-yellow-300'> Tharan Bala</motion.h1>
          <h2 className='text-4xl sm:text-7xl font-bold 
          text-[#00000] animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white'>Software Developer.</h2>
          <div>
            <Link to="about" smooth={true} duration={500}>
              <motion.button initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}} className='text-black border-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-300'>
                  View Profile 
                  <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
              </motion.button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Home