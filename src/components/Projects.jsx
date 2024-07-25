import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from 'framer-motion'

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
      x: 0, 
      opacity: 1, 
      transition: {duration: 0.5, delay: delay},
    },
  });

const Projects = () => {
  return (
    <div name='projects' className='w-full h-screen bg-[#1E1E1E] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-300'>Projects</p>
            </div>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <a href={project.link}><motion.img variants={container(0)} initial="hidden" animate="visible" src={project.img} width={150} alt="Tharan Bala" className='rounded cursor-pointer'/></a>
                        </div> 
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <motion.h6 initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:0}} className='mb-2 font-semibold'>{project.title}</motion.h6>
                            <motion.p initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:0}} className='mb-4 text-neutral-400'>{project.description}</motion.p>
                            {project.technologies.map((tech, index) =>
                                <motion.span initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:0}} key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</motion.span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects