import React from "react";
// import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaGit } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const techs = [
    {
      id: 1,
      icon: <FaHtml5 size={50} />,
      title: "HTML",
      style: "shadow-orange-500",
      level: "95%",
    },
    {
      id: 2,
      icon: <FaCss3 size={50} />,
      title: "CSS",
      style: "shadow-blue-500",
      level: "90%",
    },
    {
      id: 3,
      icon: <FaJs size={50} />,
      title: "JavaScript",
      style: "shadow-yellow-500",
      level: "90%",
    },
    {
      id: 4,
      icon: <FaReact size={50} />,
      title: "React",
      style: "shadow-blue-600",
      level: "85%",
    },
    {
      id: 5,
      icon: <FaNode size={50} />,
      title: "Node.js",
      style: "shadow-green-500",
      level: "80%",
    },
    {
      id: 6,
      icon: <SiExpress size={50} />,
      title: "Express.js",
      style: "shadow-gray-400",
      level: "80%",
    },
    {
      id: 7,
      icon: <SiMongodb size={50} />,
      title: "MongoDB",
      style: "shadow-green-600",
      level: "75%",
    },
    {
      id: 8,
      icon: <SiTailwindcss size={50} />,
      title: "Tailwind",
      style: "shadow-sky-400",
      level: "85%",
    },
    {
      id: 9,
      icon: <SiTypescript size={50} />,
      title: "TypeScript",
      style: "shadow-blue-500",
      level: "70%",
    },
    {
      id: 10,
      icon: <FaGit size={50} />,
      title: "Git",
      style: "shadow-red-500",
      level: "80%",
    },
  ];

  return (
    <div id="skills" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
      {/* <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
              Skills
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, icon, title, style, level }) => (
              <motion.div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center gap-4">
                  {icon}
                  <p className="mt-4">{title}</p>
                  <div className="w-full px-4">
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-[#64ffda] h-2.5 rounded-full"
                        style={{ width: level }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div> */}
      <div className="text-center mb-8">
        <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
          Skills
        </p>
        <p className="py-6">These are the technologies I've worked with</p>
      </div>
      {/* Content  */}
      <div className="flex gap-8 p-4">
        {/* Text  */}
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            excepturi id sapiente sequi architecto fugiat, voluptatem nemo,
            magnam non minus possimus accusamus officia quo dolore? Et
            laboriosam eos laudantium esse. Doloribus vero porro, ducimus esse
            pariatur omnis delectus doloremque ipsum unde aliquam molestias
            nesciunt qui architecto animi perspiciatis. Culpa odio enim in
            blanditiis aliquam itaque, ad, ratione natus iure animi fugit quam
            alias excepturi. Minima eligendi temporibus nam ratione hic impedit
            inventore ab sequi fugit, expedita, nostrum debitis, quaerat
            distinctio recusandae laudantium? Eaque, ipsa, accusamus aperiam,
            iste eos culpa eligendi fugit ullam dignissimos labore quod quos
            temporibus. Quos, rem a.
          </p>
        </div>
        {/* Marquee  */}
        <div className="space-y-6">
          {techs.map((tech, index) => (
            <Marquee
              key={tech.id}
              pauseOnHover={true}
              gradient={false}
              speed={40 + index * 5}
              direction={index % 2 === 0 ? "left" : "right"}
              className="flex gap-10"
            >
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-lg shadow-lg bg-gray-800">
                {tech.icon}
                <span className="mt-2 text-lg font-medium">{tech.title}</span>
              </div>
            </Marquee>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
