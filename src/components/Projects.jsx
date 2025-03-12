import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import imageOne from "../assets/study.png";
import imageTwo from "../assets/blogs.png";
import imageThree from "../assets/game.png";
import imageFour from "../assets/coupon.png";
import imageFive from "../assets/gadget.png";
import imageSix from "../assets/blogs.png";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with MERN stack featuring user authentication, product management, and payment integration.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVjb21tZXJjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      github: "#",
      demo: "#",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRhc2slMjBtYW5hZ2VtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      github: "#",
      demo: "#",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    },
    {
      title: "Blog Platform",
      description:
        "A modern blogging platform with markdown support, user authentication, and comment system.",
      github: "#",
      demo: "#",
      tech: ["React", "Node.js", "Express", "MongoDB"],
    },
  ];

  return (
    <div
      id="projects"
      className="w-full bg-[#0a192f] text-gray-300 min-h-screen p-4"
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
              Projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card One  */}
            <div className="bg-[#112240] overflow-hidden shadow-lg hover:transform hover:scale-105 transition duration-300">
              <img
                src={imageOne}
                alt="Project Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                  Study Management System
                </h3>
                <p className="text-[#8892b0] mb-4">
                  A full-stack study platform built with MERN stack featuring
                  user authentication, session management, and payment
                  integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    React
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Node.js
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    MongoDB
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Express
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Stripe
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Firebase
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    JWT
                  </span>
                </div>
                <div className="flex justify-end gap-4">
                  <a
                    href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-sahabulislamsifat"
                    target="_blank"
                    title="Github"
                    rel="noopener noreferrer"
                  >
                    <Github className="hover:text-[#64ffda]" />
                  </a>
                  <a
                    href="https://final-assignment-client.vercel.app/"
                    target="_blank"
                    title="Link"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="hover:text-[#64ffda]" />
                  </a>
                </div>
              </div>
            </div>
            {/* Card Two  */}
            <div className="bg-[#112240] overflow-hidden shadow-lg hover:transform hover:scale-105 transition duration-300">
              <img
                src={imageTwo}
                alt="Project Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                  Blog Website
                </h3>
                <p className="text-[#8892b0] mb-4">
                  A dynamic blogging platform designed for users to share
                  articles, explore topics, and interact with an engaging UI.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    React
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Node.js
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    MongoDB
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Express
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    JWT
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Firebase
                  </span>
                </div>
                <div className="flex justify-end gap-4">
                  <a
                    href="https://github.com/programming-hero-web-course2/b10a11-client-side-sahabulislamsifat"
                    target="_blank"
                    title="Github"
                    rel="noopener noreferrer"
                  >
                    <Github className="hover:text-[#64ffda]" />
                  </a>
                  <a
                    href="https://final-assignment-client.vercel.app/"
                    target="_blank"
                    title="Link"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="hover:text-[#64ffda]" />
                  </a>
                </div>
              </div>
            </div>
            {/* Card Three  */}
            <div className="bg-[#112240] overflow-hidden shadow-lg hover:transform hover:scale-105 transition duration-300">
              <img
                src={imageThree}
                alt="Project Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                  A Game Review Application
                </h3>
                <p className="text-[#8892b0] mb-4">
                  A platform for gamers to discover, review, and rate video
                  games, complete with a modern UI and seamless navigation and
                  dark/light theme toggle.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    React
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Node.js
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    MongoDB
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Express
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Firebase
                  </span>
                </div>
                <div className="flex justify-end gap-4">
                  <a
                    href="https://github.com/programming-hero-web-course2/b10-a10-client-side-sahabulislamsifat"
                    target="_blank"
                    title="Github"
                    rel="noopener noreferrer"
                  >
                    <Github className="hover:text-[#64ffda]" />
                  </a>
                  <a
                    href="https://chill-gamer-by-sifat.vercel.app/"
                    target="_blank"
                    title="Link"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="hover:text-[#64ffda]" />
                  </a>
                </div>
              </div>
            </div>
            {/* Card Four  */}
            <div className="bg-[#112240] overflow-hidden shadow-lg hover:transform hover:scale-105 transition duration-300">
              <img
                src={imageFour}
                alt="Project Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                  Discount Pro Coupon
                </h3>
                <p className="text-[#8892b0] mb-4">
                  A smart coupon aggregator app that collects discount codes
                  from various stores to help users save money on purchases.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    React
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Tailwind
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Animation
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Firebase
                  </span>
                </div>
                <div className="flex justify-end gap-4">
                  <a
                    href="https://github.com/programming-hero-web-course1/b10-a9-authentication-sahabulislamsifat"
                    target="_blank"
                    title="Github"
                    rel="noopener noreferrer"
                  >
                    <Github className="hover:text-[#64ffda]" />
                  </a>
                  <a
                    href="https://coupon-nestle.netlify.app/"
                    target="_blank"
                    title="Link"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="hover:text-[#64ffda]" />
                  </a>
                </div>
              </div>
            </div>
            {/* Card Five  */}
            <div className="bg-[#112240] overflow-hidden shadow-lg hover:transform hover:scale-105 transition duration-300">
              <img
                src={imageFive}
                alt="Project Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                  Gadget Store
                </h3>
                <p className="text-[#8892b0] mb-4">
                  An e-commerce site for gadget enthusiasts, offering a curated
                  selection of the latest tech products with a sleek UI.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    HTML
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Tailwind
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    React
                  </span>
                </div>
                <div className="flex justify-end gap-4">
                  <a
                    href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-sahabulislamsifat"
                    target="_blank"
                    title="Github"
                    rel="noopener noreferrer"
                  >
                    <Github className="hover:text-[#64ffda]" />
                  </a>
                  <a
                    href="https://gadget-heaven-assignment-eight.netlify.app/"
                    target="_blank"
                    title="Link"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="hover:text-[#64ffda]" />
                  </a>
                </div>
              </div>
            </div>
            {/* Card Six  */}
            <div className="bg-[#112240] overflow-hidden shadow-lg hover:transform hover:scale-105 transition duration-300">
              <img
                src={imageOne}
                alt="Project Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                  Animal Verse
                </h3>
                <p className="text-[#8892b0] mb-4">
                  An online store for pet lovers, offering a wide range of pet
                  products and accessories in a user-friendly interface.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    HTML
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    Tailwind
                  </span>
                  <span className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]">
                    JavaScript
                  </span>
                </div>
                <div className="flex justify-end gap-4">
                  <a
                    href="https://github.com/sahabulislamsifat/AnimalVerse"
                    target="_blank"
                    title="Github"
                    rel="noopener noreferrer"
                  >
                    <Github className="hover:text-[#64ffda]" />
                  </a>
                  <a
                    href="https://sahabulislamsifat.github.io/AnimalVerse/"
                    target="_blank"
                    title="Link"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="hover:text-[#64ffda]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
