import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { PROJECTS } from '../constants'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div name='projects' className='w-full min-h-screen bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 text-gray-300 py-20 px-4'>
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
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-400">Showcasing my latest work and innovations</p>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className='group relative'
              variants={itemVariants}
            >
              <motion.div
                className='glass rounded-2xl overflow-hidden h-full flex flex-col border border-transparent hover:border-primary-500/50 transition-all duration-300'
                whileHover={{ y: -8 }}
              >
                {/* Header section */}
                <div className='relative h-48 overflow-hidden bg-gradient-to-br from-primary-500/20 via-purple-600/20 to-dark-700 flex items-center justify-center'>
                  <div className='absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-600/10 group-hover:opacity-50 transition-opacity duration-300'></div>

                  {/* Project Title Overlay */}
                  <h3 className='text-3xl font-bold text-white/80 font-["Space_Grotesk"] z-10 px-6 text-center'>
                    {project.title}
                  </h3>

                  {/* Hover overlay */}
                  <div className='absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noreferrer'
                      className='p-3 bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors transform hover:scale-110 duration-200'
                    >
                      <FaGithub className='w-6 h-6 text-white' />
                    </a>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noreferrer'
                      className='p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-110 duration-200'
                    >
                      <ExternalLink className='w-6 h-6 text-dark-900' />
                    </a>
                  </div>
                </div>

                {/* Content section */}
                <div className='p-6 flex-1 flex flex-col'>
                  <p className='text-gray-400 text-sm leading-relaxed mb-4 flex-1'>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className='flex flex-wrap gap-2 mt-auto'>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='px-2 py-1 bg-primary-500/10 text-primary-400 rounded text-xs font-medium border border-primary-500/20'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className='h-1 bg-gradient-to-r from-primary-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className='mt-16 text-center'
          variants={itemVariants}
        >
          <a
            href='https://github.com/Tharanbala'
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-dark-900 font-semibold rounded-lg hover:bg-primary-400 transition-all duration-300 hover:scale-105 hover:shadow-glow'
          >
            <FaGithub className='w-5 h-5' />
            View More on GitHub
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Projects