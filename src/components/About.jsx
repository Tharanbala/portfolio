import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Cloud, Brain, Users, Target, MessageSquare, MapPin, Mail } from 'lucide-react'

const About = () => {
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
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Skilled in creating dynamic and responsive user interfaces using React.js, enhanced by TypeScript for improved code quality and maintainability. I also leverage TailwindCSS for efficient and consistent styling."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Proficient in Python, Node.js, and Dot Net, with deep experience building robust server-side applications using Flask and Django frameworks."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Software Development",
      description: "Experienced in developing AI-powered solutions using machine learning models, OpenAI APIs, and advanced natural language processing techniques."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Vibe Coding",
      description: "Creating intuitive and innovative coding solutions with a focus on user experience and modern development practices."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Data Science",
      description: "Capable of applying data science techniques to extract valuable insights and drive data-informed decisions."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Technologies",
      description: "Experienced in deploying and managing applications on cloud platforms, ensuring scalability and reliability."
    }
  ]

  const softSkills = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Decision-making",
      description: "Ability to analyze complex situations and make informed, timely decisions."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      description: "Proven track record of effectively leading teams and guiding projects to successful completion."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Communication",
      description: "Excellent verbal and written communication skills, facilitating clear and efficient collaboration."
    }
  ]

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-gray-300 py-20 px-4"
    >
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="glass rounded-2xl p-8 sm:p-10 mb-12"
          variants={itemVariants}
        >
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
            With over <span className="text-primary-500 font-semibold">four years of experience</span> as a Full Stack Developer, I
            bring a strong foundation in both frontend and backend technologies,
            coupled with a passion for building impactful, scalable, and
            user-centric solutions. My journey in software development has
            equipped me with the versatility to contribute meaningfully across
            diverse projects and dynamic team environments.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] mb-8 text-white">
            Technical Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="group glass rounded-xl p-6 hover:bg-primary-500/10 transition-all duration-300 border border-transparent hover:border-primary-500/50"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg text-primary-500 group-hover:bg-primary-500 group-hover:text-dark-900 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2 text-white">{skill.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] mb-8 text-white">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="glass rounded-xl p-6 hover:bg-primary-500/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary-500/20 rounded-lg text-primary-500 mb-4">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white">{skill.title}</h4>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="glass rounded-2xl p-8 sm:p-10"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold font-['Space_Grotesk'] mb-6 text-white">Get In Touch</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-500/20 rounded-lg text-primary-500">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">tharanbala33@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-500/20 rounded-lg text-primary-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">Los Angeles, CA</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About