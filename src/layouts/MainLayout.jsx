import About from "../components/About";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar  */}
      <Navbar></Navbar>
      {/* Banner Section  */}
      <Banner></Banner>
      {/* About Section */}
      <About></About>
      {/* Skills Section */}
      <Skills></Skills>
      {/* Projects Section */}
      <Projects></Projects>
      {/* Contact Section  */}
      <Contact></Contact>
      {/* Footer Section */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
