import React from 'react'
import { EXPERIENCE } from '../constants'

const Work = () => {
  return (
    <div name='work' className='w-full h-auto bg-[#1E1E1E] text-gray-300 p-4'>
        <div className='max-w-[1000px] mx-auto m-24 p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-300'>Experiences</p>
                <p className='py-6'>Check out some of my recent work and experiences</p>
            </div>
            <div>
                {EXPERIENCE.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span></h6>
                            <p className='mb-4 text-neutral-400'>{experience.description}</p>
                            {experience.technologies.map((tech, index) => 
                                <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work