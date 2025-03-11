import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-[#0a192f] text-gray-300 min-h-screen p-4 flex flex-col justify-center"
    >
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
              About Me
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-justify">
              <p className="text-[#8892b0] py-4">
                As a MERN Stack Developer, I specialize in JavaScript, React.js,
                Node.js, Express.js, and MongoDB. My passion lies in building
                scalable, responsive, and user-friendly web applications while
                maintaining clean and maintainable code.
              </p>
              <p className="text-[#8892b0] py-4">
                I constantly explore new technologies and best practices to stay
                ahead in the rapidly evolving tech landscape. I embrace
                challenges as opportunities for growth and focus on solving
                real-world problems through innovative solutions.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Coding"
                className="rounded-lg shadow-lg max-w-[300px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
