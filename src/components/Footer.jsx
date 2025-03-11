import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub size={24} />,
      href: "https://github.com/sahabulislamsifat",
      label: "GitHub",
      style: "hover:text-gray-400",
    },
    {
      id: 2,
      icon: <FaFacebook size={24} />,
      href: "https://www.facebook.com/sahabulislamsifat",
      label: "Facebook",
      style: "hover:text-blue-600",
    },
    {
      id: 3,
      icon: <HiMail size={24} />,
      href: "mailto:sahabulislamsifat@gmail.com",
      label: "Email",
      style: "hover:text-red-500",
    },
    {
      id: 4,
      icon: <FaWhatsapp size={24} />,
      href: "https://wa.me/01632165523",
      label: "WhatsApp",
      style: "hover:text-green-500",
    },
  ];

  return (
    <footer className="w-full bg-[#0a192f] text-gray-300 py-8">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-[#64ffda]">
              Sahabul Islam Sifat
            </h2>
            <p className="text-[#8892b0] mt-2">MERN Stack Developer</p>
          </div>
          <div className="flex gap-6">
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
        </div>
        <div className="text-center mt-8 text-[#8892b0]">
          <p>© 2024 Sahabul Islam Sifat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
