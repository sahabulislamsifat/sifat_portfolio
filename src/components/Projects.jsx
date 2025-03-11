import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

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
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#112240] rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#8892b0] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#233554] px-2 py-1 rounded text-sm text-[#64ffda]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      title="Github"
                      rel="noopener noreferrer"
                    >
                      <Github className="hover:text-[#64ffda]" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      title="Link"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="hover:text-[#64ffda]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
