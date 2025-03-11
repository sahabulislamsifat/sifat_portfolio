import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      <div>
        <h1 className="text-4xl font-signature ml-2 text-[#64ffda]">Sifat</h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-x-8">
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <li
            key={item}
            className="hover:text-[#64ffda] cursor-pointer capitalize"
          >
            <Link to={item} smooth duration={500}>
              {item}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="/resume.pdf"
            download
            className="bg-[#64ffda] text-[#0a192f] px-4 py-[6px] rounded hover:bg-transparent hover:text-[#64ffda] border-2 border-[#64ffda] transition duration-300"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <Menu size={30} /> : <X size={30} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <li key={item} className="py-6 text-4xl capitalize">
            <Link onClick={handleClick} to={item} smooth duration={500}>
              {item}
            </Link>
          </li>
        ))}
        <li className="py-6 text-4xl">
          <a
            href="/resume.pdf"
            download
            className=" bg-[#64ffda] text-[#0a192f] px-6 py-3 hover:bg-transparent hover:text-[#64ffda] border-2 border-[#64ffda] transition duration-300"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
