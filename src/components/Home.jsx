import { motion } from 'framer-motion'
import { ArrowRight, Mail, FileText } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Scene3D from './Scene3D'
import resume from '../assets/resume.pdf'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <div name='home' className="relative w-full h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
      {/* 3D Background */}
      <Scene3D />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/80 via-dark-800/60 to-dark-900/80 z-10"></div>

      {/* Content Container */}
      <motion.div
        className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.p
            className='text-primary-400 text-lg sm:text-xl font-medium mb-4'
            variants={itemVariants}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className='text-5xl sm:text-7xl lg:text-8xl font-bold mb-4'
            variants={itemVariants}
          >
            <span className="text-white font-['Space_Grotesk']">Tharan Bala</span>
          </motion.h1>

          <motion.h2
            className='text-3xl sm:text-5xl lg:text-6xl font-bold mb-8'
            variants={itemVariants}
          >
            <span className="text-gradient font-['Space_Grotesk']">Software Engineer</span>
          </motion.h2>

          <motion.p
            className='text-gray-300 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed'
            variants={itemVariants}
          >
            Full Stack Developer specializing in building exceptional digital experiences
            with modern technologies and AI integration.
          </motion.p>

          <motion.div
            className='flex flex-wrap gap-4'
            variants={itemVariants}
          >
            <Link to="about" smooth={true} duration={500}>
              <button className='group relative px-8 py-4 bg-primary-500 text-dark-900 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow flex items-center gap-2'>
                <span className='relative z-10'>View Profile</span>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                <div className='absolute inset-0 bg-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
              </button>
            </Link>

            <Link to="projects" smooth={true} duration={500}>
              <button className='group px-8 py-4 glass text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 border border-primary-500/30 hover:border-primary-500/50'>
                <span>View Projects</span>
              </button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className='flex gap-4 mt-12'
            variants={itemVariants}
          >
            <a
              href='https://github.com/Tharanbala'
              target='_blank'
              rel='noreferrer'
              className='p-3 glass rounded-lg hover:bg-primary-500/10 transition-all duration-300 hover:scale-110'
            >
              <FaGithub className='w-6 h-6 text-gray-300' />
            </a>
            <a
              href='https://www.linkedin.com/in/tharan-bala/'
              target='_blank'
              rel='noreferrer'
              className='p-3 glass rounded-lg hover:bg-primary-500/10 transition-all duration-300 hover:scale-110'
            >
              <FaLinkedin className='w-6 h-6 text-gray-300' />
            </a>
            <a
              href='mailto:tharanbala33@gmail.com'
              className='p-3 glass rounded-lg hover:bg-primary-500/10 transition-all duration-300 hover:scale-110'
            >
              <Mail className='w-6 h-6 text-gray-300' />
            </a>
            <a
              href={resume}
              download='Tharan_Bala_Resume.pdf'
              className='p-3 glass rounded-lg hover:bg-primary-500/10 transition-all duration-300 hover:scale-110'
            >
              <FileText className='w-6 h-6 text-gray-300' />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className='w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center'>
            <div className='w-1.5 h-3 bg-primary-500 rounded-full mt-2 animate-pulse'></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home