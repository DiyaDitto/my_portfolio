import React from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "../RevealOnScroll";
import { Download } from "lucide-react";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden py-24 px-4"
      style={{
        backgroundImage: "url('/portfolio.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <RevealOnScroll>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-14">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500"
            >
              Hi, I am Diya Ditto
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 text-lg mb-8 max-w-xl"
            >
              I'm a passionate and creative full-stack web developer who loves
              building modern, interactive, and responsive websites. From
              elegant front-end designs to robust back-end solutions, I enjoy
              bringing ideas to life through clean code and thoughtful user
              experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-full font-medium shadow-md transition duration-300 hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-cyan-400 text-cyan-300 py-3 px-6 rounded-full font-medium transition hover:bg-cyan-600/10 hover:scale-105"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Profile Image - bigger with hover glow and zoom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden shadow-2xl shadow-cyan-500/20 hover:scale-105 hover:ring-4 hover:ring-cyan-400/30 transition duration-300"
          >
            <img
              src="/diyapic.jpg"
              alt="Diya Ditto"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
