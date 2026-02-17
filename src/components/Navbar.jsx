import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/portfolio-logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => setNav(!nav);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full h-20 flex justify-between items-center px-4 sm:px-8 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
      }`}
    >
        <Link to="home" smooth={true} duration={500}>
            <motion.div
                className='flex items-center gap-3 cursor-pointer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <img className='w-12 h-12 rounded-full ring-2 ring-primary-500/50' src={logo} alt='Tharan Bala' />
                <span className='text-white font-bold text-xl font-["Space_Grotesk"] hidden sm:block'>
                    TB <span className='text-primary-500'>PORTFOLIO</span>
                </span>
            </motion.div>
        </Link>

        {/* Desktop menu */}
        <div className='hidden md:flex'>
            <ul className='flex items-center gap-1'>
                {['home', 'about', 'skills', 'work', 'projects', 'contact'].map((item) => (
                    <motion.li
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to={item} smooth={true} duration={500}>
                            <span className='px-4 py-2 text-gray-300 hover:text-primary-500 transition-colors duration-300 cursor-pointer capitalize font-medium'>
                                {item === 'work' ? 'Experience' : item}
                            </span>
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </div>

        {/* Hamburger */}
        <motion.div
            onClick={handleClick}
            className='md:hidden z-50 cursor-pointer text-gray-300 hover:text-primary-500 transition-colors'
            whileTap={{ scale: 0.9 }}
        >
            {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
            {nav && (
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 0.3 }}
                    className='absolute top-0 left-0 w-full h-screen glass-dark flex flex-col justify-center items-center md:hidden'
                >
                    {['home', 'about', 'skills', 'work', 'projects', 'contact'].map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className='py-6'
                        >
                            <Link onClick={handleClick} to={item} smooth={true} duration={500}>
                                <span className='text-3xl text-gray-300 hover:text-primary-500 transition-colors cursor-pointer capitalize font-medium'>
                                    {item === 'work' ? 'Experience' : item}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
