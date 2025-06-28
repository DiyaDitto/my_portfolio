import React from "react";
import RevealOnScroll from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden py-24 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hi, I am Diya Ditto
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              I'm a passionate and creative full-stack web developer who loves
              building modern, interactive, and responsive websites. From elegant
              front-end designs to robust back-end solutions, I enjoy bringing
              ideas to life through clean code and thoughtful user experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="bg-cyan-600 text-white py-3 px-6 rounded font-medium transition hover:scale-105 hover:shadow-cyan-400/30 hover:shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-cyan-400 text-cyan-300 py-3 px-6 rounded font-medium transition hover:bg-cyan-500/10 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg hover:scale-105 transition duration-300">
              <img
                src="/diyapic.jpg" // Image from public folder
                alt="Diya Ditto"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
