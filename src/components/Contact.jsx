import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Mail, MapPin } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div name='contact' className='w-full min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex justify-center items-center py-20 px-4'>
      <motion.div
        ref={ref}
        className='max-w-6xl w-full'
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect and create something amazing together!
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Contact Info */}
          <motion.div className='space-y-6' variants={itemVariants}>
            <div className='glass rounded-2xl p-8'>
              <h3 className='text-2xl font-bold text-white mb-6 font-["Space_Grotesk"]'>Contact Information</h3>

              <div className='space-y-6'>
                <div className='flex items-start gap-4 group'>
                  <div className='p-3 bg-primary-500/20 rounded-lg text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300'>
                    <Mail className='w-6 h-6' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-400 mb-1'>Email</p>
                    <a href='mailto:tharanbala33@gmail.com' className='text-white font-medium hover:text-primary-400 transition-colors'>
                      tharanbala33@gmail.com
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-4 group'>
                  <div className='p-3 bg-primary-500/20 rounded-lg text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300'>
                    <MapPin className='w-6 h-6' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-400 mb-1'>Location</p>
                    <p className='text-white font-medium'>Los Angeles, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <motion.div
              className='glass rounded-2xl p-8 border border-primary-500/30'
              whileHover={{ scale: 1.02 }}
            >
              <h4 className='text-xl font-bold text-white mb-3 font-["Space_Grotesk"]'>Availability</h4>
              <p className='text-gray-400'>
                <span className='text-primary-400 font-semibold'>Collaborate</span> for new ideas.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form
              action="https://getform.io/f/jawxlrqb"
              method="POST"
              className='glass rounded-2xl p-8 space-y-6'
            >
              <div>
                <label htmlFor="name" className='block text-sm font-medium text-gray-300 mb-2'>
                  Name
                </label>
                <input
                  id="name"
                  className='w-full bg-dark-700/50 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300'
                  type="text"
                  placeholder='Your Name'
                  name='name'
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-300 mb-2'>
                  Email
                </label>
                <input
                  id="email"
                  className='w-full bg-dark-700/50 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300'
                  type="email"
                  placeholder='your.email@example.com'
                  name='email'
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-sm font-medium text-gray-300 mb-2'>
                  Message
                </label>
                <textarea
                  id="message"
                  className='w-full bg-dark-700/50 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 resize-none'
                  name="message"
                  rows='6'
                  placeholder='Your message here...'
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className='w-full bg-primary-500 text-dark-900 font-semibold rounded-lg p-4 hover:bg-primary-400 transition-all duration-300 flex items-center justify-center gap-2 group'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className='text-center mt-16 pt-8 border-t border-gray-700'
          variants={itemVariants}
        >
          <p className='text-gray-400'>
            © {new Date().getFullYear()} Tharan Bala. All Rights Reserved.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact