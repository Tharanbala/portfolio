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
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full'>
          <div className='mt-24'>
              <p className='text-4xl font-bold inline border-b-4 border-yellow-300 '>About Me</p>
          </div>
          <div>
              <div>
                  <motion.p initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:0}} className='text-1xl py-4'>Throughout my career spanning over three years in Full Stack Development, I have cultivated a diverse and robust skill set that has enabled me to deliver impactful results across various projects.</motion.p>
                    <p>My expertise encompasses a wide range of technologies, including:</p>
                    <p>1. <span className='text-yellow-300'>Backend Development:</span> Proficient in Python, with extensive experience using frameworks such as Flask and Django to build robust server-side applications.</p>
                    <p>2. <span className='text-yellow-300'>Frontend Development:</span> Skilled in creating dynamic and responsive user interfaces using React.js, enhanced by TypeScript for improved code quality and maintainability. I also leverage TailwindCSS for efficient and consistent styling.</p>
                    <p>3. <span className='text-yellow-300'>Data Science:</span> Capable of applying data science techniques to extract valuable insights and drive data-informed decisions.</p>
                    <p>4. <span className='text-yellow-300'>Cloud Technologies:</span> Experienced in deploying and managing applications on cloud platforms, ensuring scalability and reliability.</p>
                    <p className='py-4'>My technical prowess is complemented by strong soft skills that are crucial in today's collaborative work environments. I am recognized for my:</p>
                    <p>1. <span className='text-yellow-300'>Decision-making:</span> Ability to analyze complex situations and make informed, timely decisions.</p>
                    <p>2. <span className='text-yellow-300'>Leadership:</span> Proven track record of effectively leading teams and guiding projects to successful completion.</p>
                    <p>3. <span className='text-yellow-300'>Communication:</span> Excellent verbal and written communication skills, facilitating clear and efficient collaboration with team members and stakeholders.</p>
                    <p className='py-4'>These combined technical and interpersonal skills have consistently allowed me to contribute to enhanced business performance, delivering solutions that not only meet but often exceed expectations.</p>
              </div>
              <div>
                  <motion.p variants={container(0)} initial="hidden" animate="visible" className='pt-8'><span className='text-yellow-300'>Phone number: </span>(414) 243-5462</motion.p>
                  <motion.p variants={container(0)} initial="hidden" animate="visible"><span className='text-yellow-300'>Email: </span> tharanbala33@gmail.com</motion.p>
                  <motion.p variants={container(0)} initial="hidden" animate="visible"><span className='text-yellow-300'>Address: </span> Milwaukee, WI</motion.p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default About