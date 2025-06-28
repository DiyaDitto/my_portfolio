import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  const projects = [
    {
      title: "Placement Resource Portal",
      desc: "A portal for sharing academic and placement materials, built with Flask and React.",
      tech: ["React", "TailwindCSS", "Flask", "Python"],
      demoLink: "https://placement-resource-portal.vercel.app/",
      codeLink: "https://github.com/DiyaDitto/Placement-Resource-Portal",
      image: "/placement.jpg",
    },
    {
      title: "Weather App",
      desc: "Real-time weather forecast app using OpenWeather API.",
      tech: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://prodigy-wd-05-rose.vercel.app/",
      codeLink: "https://github.com/DiyaDitto/simple_weather_app_js",
      image: "/weatherimg.jpg",
    },
    {
      title: "Portfolio Website",
      desc: "Modern animated personal portfolio built using React and Framer Motion.",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      demoLink: "https://your-portfolio.com",
      codeLink: "https://github.com/your-portfolio-code",
      image: "/portfolio.jpg",
    },
    {
      title: "Tic Tac Toe Game",
      desc: "Classic Tic Tac Toe with restart functionality and smooth UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://prodigy-wd-03-gamma.vercel.app/",
      codeLink: "https://github.com/DiyaDitto/Tic_Tac_Toe_js",
      image: "/tictactoe.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col min-h-[450px]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover object-center"
                />
                <div className="flex flex-col justify-between flex-grow p-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black font-medium rounded-full hover:bg-cyan-600 transition"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition"
                    >
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Projects;
