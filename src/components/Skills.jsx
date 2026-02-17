import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Django from "../assets/django.png";
import Flask from "../assets/flask.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Typescript from "../assets/typescript.png";
import NodeJs from "../assets/nodejs.png";
import DotNet from "../assets/dotnet.png";
import AWS from "../assets/aws.png";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: "Django", img: Django, color: "#0c4b33" },
    { name: "Flask", img: Flask, color: "#000000", bgWhite: true },
    { name: "Node.js", img: NodeJs, color: "#68a063", bgWhite: true },
    { name: ".NET", img: DotNet, color: "#512bd4", bgWhite: true },
    { name: "React", img: ReactImg, color: "#61dafb" },
    { name: "TypeScript", img: Typescript, color: "#3178c6" },
    { name: "JavaScript", img: JavaScript, color: "#f7df1e" },
    { name: "Tailwind CSS", img: Tailwind, color: "#06b6d4" },
    { name: "HTML5", img: HTML, color: "#e34f26" },
    { name: "CSS3", img: CSS, color: "#1572b6" },
    { name: "GitHub", img: GitHub, color: "#181717" },
    { name: "AWS", img: AWS, color: "#ff9900" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 text-gray-300 py-20 px-4"
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
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-400">Technologies and tools I've worked with</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="glass rounded-2xl p-6 flex flex-col items-center justify-center h-full hover:bg-primary-500/10 transition-all duration-300 border border-transparent hover:border-primary-500/50 relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/10 transition-all duration-300 rounded-2xl"></div>

                {/* Image container */}
                <div className={`relative w-20 h-20 flex items-center justify-center mb-4 ${skill.bgWhite ? 'bg-white p-2 rounded-lg' : ''}`}>
                  <motion.img
                    className="w-full h-full object-contain"
                    src={skill.img}
                    alt={skill.name}
                    animate={{
                      y: [0, -8, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Skill name */}
                <p className="text-sm sm:text-base font-semibold text-white text-center group-hover:text-primary-400 transition-colors duration-300">
                  {skill.name}
                </p>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 rounded-2xl animate-pulse-glow"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 glass rounded-2xl p-8 text-center"
          variants={itemVariants}
        >
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Constantly learning and adapting to new technologies to build cutting-edge solutions.
            <span className="text-primary-500 font-semibold"> Always exploring what's next.</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
