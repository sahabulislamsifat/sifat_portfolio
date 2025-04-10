import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      {/* Logo */}
      <div>
        <a href="/" className="cursor-pointer text-4xl text-[#64ffda]">
          <span className="text-[46px] font-semibold">S</span>ifat
        </a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-8">
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <li
            key={item}
            className="hover:text-[#64ffda] cursor-pointer capitalize"
          >
            <Link
              to={item}
              smooth
              duration={500}
              className="text-gray-300 hover:text-[#64ffda] transition duration-300"
              aria-label={`Navigate to ${item}`}
            >
              {item}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="https://drive.google.com/file/d/127vUEaJ9DJ1itxDkcuHqr4evXgBdLxVb/view"
            download
            className="bg-[#64ffda] text-[#0a192f] px-4 py-[6px] rounded hover:bg-transparent hover:text-[#64ffda] border-2 border-[#64ffda] transition duration-300"
            aria-label="Download Resume"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Hamburger Menu (Mobile) */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer py-2"
        aria-label="Toggle Menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
      >
        {!nav ? (
          <Menu size={30} aria-hidden="true" />
        ) : (
          <X size={30} aria-hidden="true" />
        )}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-40"
          aria-label="Mobile Navigation"
        >
          <ul className="space-y-6">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <li key={item} className="text-center">
                <Link
                  onClick={handleClick}
                  to={item}
                  smooth
                  duration={500}
                  className="text-4xl capitalize text-gray-300 hover:text-[#64ffda] transition duration-300"
                  aria-label={`Navigate to ${item}`}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li className="text-center">
              <a
                href="https://drive.google.com/file/d/127vUEaJ9DJ1itxDkcuHqr4evXgBdLxVb/view"
                download
                className="inline-block bg-[#64ffda] text-[#0a192f] px-6 py-3 text-2xl hover:bg-transparent hover:text-[#64ffda] border-2 border-[#64ffda] rounded transition duration-300"
                aria-label="Download Resume"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
