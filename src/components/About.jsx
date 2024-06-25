import React from 'react'
import {motion} from 'framer-motion'

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
      x: 0, 
      opacity: 1, 
      transition: {duration: 0.5, delay: delay},
    },
  });

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1E1E1E] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-b-yellow-300'>About</p>
                </div>
                <div>

                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right font-bold'>
                    <motion.p variants={container(0)} initial="hidden" animate="visible" className='text-2xl py-4'><span className='text-yellow-300'>Phone number: </span>(414) 243-5462</motion.p>
                    <motion.p variants={container(0)} initial="hidden" animate="visible" className='text-2xl py-4'><span className='text-yellow-300'>Email: </span> tharanbala33@gmail.com</motion.p>
                    <motion.p variants={container(0)} initial="hidden" animate="visible" className='text-2xl py-4'><span className='text-yellow-300'>Address: </span> Milwaukee, WI</motion.p>
                </div>
                <div>
                    <motion.p initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:0}} className='text-2xl'>With over three years of experience in Full Stack Development, I have utilized Python (Flask, Django), React.js, Typescript, TailwindCSS, Data Science and Cloud
                technologies to successfully execute numerous projects, delivering results that have enhanced business performance. I am
                recognized as a proficient decision-maker, a reliable team leader, and possess strong communication skills</motion.p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About