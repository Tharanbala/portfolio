import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase } from 'lucide-react'
import { EXPERIENCE } from '../constants'

const Work = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div name='work' className='w-full min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-gray-300 py-20 px-4'>
      <motion.div
        ref={ref}
        className='max-w-7xl mx-auto'
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-4">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-400">My professional journey and accomplishments</p>
        </motion.div>

        {/* Timeline */}
        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-600 to-transparent hidden md:block'></div>

          {/* Experience items */}
          {EXPERIENCE.map((experience, index) => (
            <motion.div
              key={index}
              className='relative mb-12 md:pl-20'
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className='absolute left-6 top-6 w-5 h-5 bg-primary-500 rounded-full border-4 border-dark-900 hidden md:block z-10'>
                <div className='absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-75'></div>
              </div>

              {/* Content card */}
              <motion.div
                className='glass rounded-2xl p-6 sm:p-8 hover:bg-primary-500/5 transition-all duration-300 border border-transparent hover:border-primary-500/30'
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Header */}
                <div className='flex flex-wrap items-start justify-between gap-4 mb-4'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <div className='p-2 bg-primary-500/20 rounded-lg'>
                        <Briefcase className='w-5 h-5 text-primary-500' />
                      </div>
                      <h3 className='text-xl sm:text-2xl font-bold text-white font-["Space_Grotesk"]'>
                        {experience.role}
                      </h3>
                    </div>
                    <p className='text-lg text-primary-400 font-semibold'>{experience.company}</p>
                  </div>
                  <span className='px-4 py-2 bg-primary-500/20 text-primary-400 rounded-lg text-sm font-medium whitespace-nowrap'>
                    {experience.year}
                  </span>
                </div>

                {/* Description */}
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2'>
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className='px-3 py-1.5 bg-dark-700/50 text-primary-400 rounded-lg text-sm font-medium border border-primary-500/20 hover:border-primary-500/50 transition-colors'
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Work