import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact, SiTailwindcss, SiFlask, SiPython, SiHtml5,
  SiCss3, SiJavascript, SiNextdotjs, SiRedux, SiMongodb,
  SiFirebase, SiNodedotjs, SiExpress, SiVuedotjs, SiAngular,
} from "react-icons/si";
import { motion } from "framer-motion";
import RevealOnScroll from "../RevealOnScroll";
import { Dialog } from "@headlessui/react";

// Tech Icon Colors
const techIconMap = {
  React: <SiReact className="text-cyan-400 text-lg" />,
  TailwindCSS: <SiTailwindcss className="text-sky-400 text-lg" />,
  Flask: <SiFlask className="text-white text-lg" />,
  Python: <SiPython className="text-yellow-400 text-lg" />,
  HTML: <SiHtml5 className="text-orange-500 text-lg" />,
  CSS: <SiCss3 className="text-blue-500 text-lg" />,
  JavaScript: <SiJavascript className="text-yellow-300 text-lg" />,
  NextJS: <SiNextdotjs className="text-white text-lg" />,
  Redux: <SiRedux className="text-purple-400 text-lg" />,
  MongoDB: <SiMongodb className="text-green-500 text-lg" />,
  Firebase: <SiFirebase className="text-yellow-500 text-lg" />,
  "Node.js": <SiNodedotjs className="text-green-400 text-lg" />,
  "Express.js": <SiExpress className="text-gray-300 text-lg" />,
  Vue: <SiVuedotjs className="text-green-400 text-lg" />,
  Angular: <SiAngular className="text-red-500 text-lg" />,
};

const categories = ["All", "Frontend", "Backend", "Fullstack", "Others"];

const allProjects = [
  {
    title: "Placement Resource Portal",
    desc: "A portal for sharing academic and placement materials, built with Flask and React.",
    tech: ["React", "TailwindCSS", "Flask", "Python"],
    category: ["Frontend", "Backend", "Fullstack"],
    demoLink: "https://placement-resource-portal.vercel.app/",
    codeLink: "https://github.com/DiyaDitto/Placement-Resource-Portal",
    image: "/placement.jpg",
  },
  {
    title: "Weather App",
    desc: "Real-time weather forecast app using OpenWeather API.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: ["Frontend"],
    demoLink: "https://prodigy-wd-05-rose.vercel.app/",
    codeLink: "https://github.com/DiyaDitto/simple_weather_app_js",
    image: "/weatherimg.jpg",
  },
  {
    title: "Portfolio Website",
    desc: "Modern animated personal portfolio built using React and Framer Motion.",
    tech: ["React", "TailwindCSS"],
    category: ["Frontend"],
    demoLink: "https://your-portfolio.com",
    codeLink: "https://github.com/DiyaDitto/my_portfolio",
    image: "/portfolio.jpg",
  },
  {
    title: "Tic Tac Toe Game",
    desc: "Classic Tic Tac Toe with restart functionality and smooth UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: ["Frontend"],
    demoLink: "https://prodigy-wd-03-gamma.vercel.app/",
    codeLink: "https://github.com/DiyaDitto/Tic_Tac_Toe_js",
    image: "/tictactoe.jpg",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const filtered =
    filter === "All"
      ? allProjects
      : allProjects.filter((proj) => proj.category.includes(filter));

  const visibleProjects = filtered.slice(0, visibleCount);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-black via-neutral-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h2>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                  filter === cat
                    ? "bg-cyan-600 text-white"
                    : "bg-white/10 text-cyan-300 hover:bg-cyan-600/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg group transition"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover cursor-pointer group-hover:scale-105 transition duration-500"
                    onClick={() => setSelectedImage(project.image)}
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">{project.desc}</p>

                    {/* Tech Icons - Hover Tooltip */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {project.tech.map((tech, i) => (
                        <div
                          key={i}
                          className="relative group inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 hover:bg-cyan-500/20 transition cursor-pointer"
                        >
                          {techIconMap[tech]}
                          <div className="absolute bottom-full mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-10">
                            {tech}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-2">
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

          {/* Load More Button */}
          {filtered.length > visibleCount && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((prev) => prev + 2)}
                className="px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition"
              >
                Load More
              </button>
            </div>
          )}
        </RevealOnScroll>

        {/* Image Modal */}
        <Dialog
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          className="fixed inset-0 z-50"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <Dialog.Panel className="relative max-w-3xl mx-auto">
              <img
                src={selectedImage}
                alt="project preview"
                className="rounded-xl max-h-[80vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70 rounded-full px-3 py-1 text-sm"
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
