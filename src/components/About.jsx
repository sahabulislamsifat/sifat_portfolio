import React from "react";
import { motion } from "framer-motion";
import sifat from "../assets/sifat.jpg";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const About = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/sahabulislamsifat/",
      label: "LinkedIn",
      style: "hover:text-[#0A66C2]",
    },
    {
      id: 2,
      icon: <FaGithub size={24} />,
      href: "https://github.com/sahabulislamsifat",
      label: "GitHub",
      style: "hover:text-gray-400",
    },
    {
      id: 3,
      icon: <FaFacebook size={24} />,
      href: "https://www.facebook.com/sahabulislamsifat",
      label: "Facebook",
      style: "hover:text-blue-600",
    },
    {
      id: 4,
      icon: <HiMail size={24} />,
      href: "mailto:sahabulislamsifat@gmail.com",
      label: "Email",
      style: "hover:text-red-500",
    },
    {
      id: 5,
      icon: <FaWhatsapp size={24} />,
      href: "https://wa.me/01632165523",
      label: "WhatsApp",
      style: "hover:text-green-500",
    },
  ];

  return (
    <div
      id="about"
      className="w-full bg-[#0a192f] text-gray-300 min-h-screen p-4 pt-[105px] md:pt-0 flex flex-col justify-center"
    >
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6 md:mb-16">
            <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
              About
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-justify">
              <p className="text-[#8892b0] pt-3 pb-2 pr-2">
                As a MERN Stack Developer, I specialize in JavaScript, React.js,
                Node.js, Express.js, and MongoDB. My passion lies in building
                scalable, responsive, and user-friendly web applications while
                maintaining clean and maintainable code.
              </p>
              <p className="text-[#8892b0] py-4 pr-2">
                I constantly explore new technologies and best practices to stay
                ahead in the rapidly evolving tech landscape. I embrace
                challenges as opportunities for growth and focus on solving
                real-world problems through innovative solutions.
              </p>
            </div>
            <div className="flex justify-center items-center md:mt-4 mb-6 md:mb-0">
              <img
                src={sifat}
                alt="photo"
                className="rounded shadow-lg max-w-[320px]"
              />
            </div>
            {/* Social Links  */}
            <div>
              {/* <div className="flex space-x-4 text-xl mb-2 mt-4 md:mt-0 text-slate-500">
                <a
                  href="https://www.linkedin.com/in/sahabulislamsifat/"
                  className="cursor-pointer"
                  title="LinkedIn"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/sahabulislamsifat"
                  className="cursor-pointer"
                  title="GitHub"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.facebook.com/sahabulislamsifat"
                  className="cursor-pointer"
                  title="Facebook"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://x.com/sifat016"
                  className="cursor-pointer"
                  title="X"
                  target="_blank"
                >
                  <BsTwitterX />
                </a>
              </div> */}
              <div className="flex gap-2 text-slate-500">
                {socialLinks.map(({ id, icon, href, label, style }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-300 ${style} group relative`}
                  >
                    {icon}
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
              {/* Extra  */}
              <div className="mt-2">
                <h3 className="text-[16px] font-medium text-slate-500">
                  Bachelor of Business Administration
                </h3>
                <p className="text-[14px] text-slate-500">
                  Government Titumir College, Dhaka
                </p>
                <p className="text-[12px] text-slate-500">
                  Mohakhali, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
