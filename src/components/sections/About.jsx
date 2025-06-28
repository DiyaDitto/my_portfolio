import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  GraduationCap, Briefcase, Download, Sparkles,
  ChevronDown, ChevronUp
} from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";

export const About = () => {
  const imageRef = useRef(null);
  const skillsRef = useRef(null);
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const skillBlocks = [
    {
      title: "Frontend",
      skills: ["React","JavaScript", "TailwindCSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      skills: ["Flask", "Python", "Java", "MongoDB", "SQL", "C++"]
    },
    {
      title: "Other Skills",
      skills: ["GitHub",  "Figma",]
    },
    {
      title: "Hobbies",
      skills: ["UI Designing", "Content Writing"]
    }
  ];

  const skillIcons = {
    React: "⚛️", Vue: "🟢", Angular: "🔴", JavaScript: "🟨", TypeScript: "🔷",
    TailwindCSS: "🌬️", HTML5: "🟥", CSS3: "🟦", "Next.js": "⏭️", Redux: "🔁",
    Flask: "🍶", Python: "🐍", Java: "☕", MongoDB: "🍃", SQL: "🧮",
    NodeJS: "🌿", "Express.js": "🚂", Firebase: "🔥", "REST APIs": "🔗",
    GitHub: "🐙", Docker: "🐳", Figma: "🎨", "Unit Testing": "🧪", "CI/CD": "⚙️",
    Agile: "🏃", "Public Speaking": "🎤", "UI Designing": "🎨", Blogging: "✍️", Mentoring: "🤝"
  };

  const [viewModes, setViewModes] = useState(() => {
    const saved = localStorage.getItem("viewModes");
    return saved ? JSON.parse(saved) : {};
  });

  const [collapsed, setCollapsed] = useState({});

  useEffect(() => {
    localStorage.setItem("viewModes", JSON.stringify(viewModes));
  }, [viewModes]);

  const toggleView = (title) => {
    setViewModes(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen py-28 px-6 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/port2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />


      <RevealOnScroll>
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            <Sparkles className="inline w-8 h-8 mb-2 animate-pulse text-cyan-400" /> About Me
          </motion.h2>

          {/* Quick Nav */}
          <div className="flex justify-center gap-6 mb-10 flex-wrap">
            <button
              onClick={() => scrollToRef(skillsRef)}
              className="px-5 py-2 text-sm font-medium border border-cyan-500 text-cyan-300 rounded-full hover:bg-cyan-700/20 transition"
            >
              Jump to Skills
            </button>
            <button
              onClick={() => scrollToRef(timelineRef)}
              className="px-5 py-2 text-sm font-medium border border-purple-400 text-purple-300 rounded-full hover:bg-purple-700/20 transition"
            >
              Jump to Timeline
            </button>
          </div>

          <p className="text-center text-gray-300 text-lg max-w-xl mx-auto mb-16">
             Developer • Problem Solver • Tech Explorer
          </p>

          {/* Profile + Intro */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <motion.div ref={imageRef} style={{ scale }} className="relative">
              <img
                src="/diyapic2.jpg"
                alt="Diya Ditto"
                className="w-72 h-72 object-cover rounded-xl border-cyan-400 shadow-xl hover:scale-105 hover:shadow-cyan-500/30 transition duration-300"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-gray-200 text-lg"
            >
              <p className="mb-6 leading-relaxed">
                I'm <span className="text-cyan-400 font-bold">Diya Ditto</span>, a full-stack developer who thrives on building beautiful UIs and scalable backends. I believe in clean code, continuous learning, and crafting digital experiences with purpose.
              </p>
              <a
                href="/Diya_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-300 hover:bg-cyan-200 text-black font-semibold rounded-full hover:scale-105 transition-transform shadow"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
            </motion.div>
          </div>

          {/* Skills Section */}
          <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {skillBlocks.map((block, idx) => {
              const isBarView = viewModes[block.title] ?? true;
              const isCollapsed = collapsed[block.title] ?? false;

              return (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-cyan-400/20 shadow"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold text-cyan-300">{block.title}</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleView(block.title)}
                        className="text-xs px-3 py-1 border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-700/20 transition"
                      >
                        Toggle View
                      </button>
                      <button
                        onClick={() =>
                          setCollapsed(prev => ({ ...prev, [block.title]: !isCollapsed }))
                        }
                        className="text-xs px-2 py-1 border border-cyan-500 text-cyan-200 rounded-full hover:bg-cyan-700/20 transition"
                      >
                        {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden flex flex-col gap-3"
                      >
                        {block.skills.map((skill) =>
                          isBarView ? (
                            <div key={skill} className="flex items-center gap-2">
                              <span className="text-lg">{skillIcons[skill] || "💡"}</span>
                              <div className="flex-1 bg-cyan-700/20 h-3 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: "0%" }}
                                  animate={{ width: "80%" }}
                                  transition={{ duration: 0.5 }}
                                  className="bg-cyan-400 h-3 rounded-full"
                                />
                              </div>
                              <span className="text-sm text-cyan-200">{skill}</span>
                            </div>
                          ) : (
                            <span
                              key={skill}
                              className="px-4 py-1 text-sm font-medium text-cyan-100 bg-cyan-600/20 rounded-full border border-cyan-300/30 hover:bg-cyan-500/30 transition"
                            >
                              {skillIcons[skill] || "💡"} {skill}
                            </span>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative border-l-2 border-cyan-700/30 pl-6 space-y-12">
            {[
              {
                icon: <GraduationCap className="w-5 h-5 text-cyan-300" />,
                title: "B.Tech in CSE – College of Engineering Chengannur",
                subtitle: "2022–2026",
                desc: "Strong foundation in full-stack development, software engineering, and problem-solving."
              },
              {
                icon: <Briefcase className="w-5 h-5 text-purple-300" />,
                title: "Web Developer Intern – Prodigy Infotech",
                subtitle: "2023",
                desc: "Crafted interactive projects, responsive UI, and honed frontend skills."
              },
              {
                icon: <Briefcase className="w-5 h-5 text-purple-300" />,
                title: "Innovator – WeStart Startup Mission",
                subtitle: "2024",
                desc: "Collaborated in a startup, building real-world solutions from scratch."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative ml-2"
              >
                <div className="absolute -left-[29px] top-1 w-6 h-6 bg-cyan-600/60 rounded-full border-2 border-white flex items-center justify-center shadow">
                  {item.icon}
                </div>
                <div className="bg-white/5 rounded-xl p-5 shadow border border-white/10">
                  <h4 className="text-lg font-bold text-cyan-300">{item.title}</h4>
                  <span className="text-sm text-gray-400">{item.subtitle}</span>
                  <p className="text-sm mt-2 text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
