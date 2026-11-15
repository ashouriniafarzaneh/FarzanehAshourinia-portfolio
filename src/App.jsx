
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`relative isolate min-h-screen ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      {/* Fixed photo behind the entire website */}
    <div
  className="fixed inset-0 -z-10 bg-cover bg-[position:60%_center] md:bg-center"
  style={{
    backgroundImage: "url('/workspace.png')"
        }}
    />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero darkMode={darkMode} />
     
      <main>
         <About darkMode={darkMode} />
         <Education darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Courses darkMode={darkMode} />
      </main>

      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
