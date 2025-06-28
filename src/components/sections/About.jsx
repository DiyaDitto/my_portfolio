import { motion } from "framer-motion";
import RevealOnScroll from "../RevealOnScroll";

export const About = () => {
  const frontendskills = ["React", "Vue", "TypeScript", "JavaScript", "TailwindCSS"];
  const backendskills = ["Node.js", "Python", "AWS", "MongoDB", "SQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-28 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* Image + About */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="shrink-0"
            >
              <img
                src="/diyapic2.jpg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/fallback.jpg"; // Optional fallback image
                }}
                alt="Diya Ditto"
                className="w-48 h-48 rounded-full border-4 border-cyan-400 shadow-lg object-cover"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 max-w-2xl"
            >
              <p className="mb-6 leading-relaxed">
                I'm <span className="text-cyan-400 font-medium">Diya Ditto</span>, a passionate full-stack web developer driven by curiosity and creativity. I specialize in building user-friendly, high-performance web apps with a strong focus on clean design and efficient backend logic.
                <br />
                <br />
                I enjoy exploring new technologies, contributing to open source, and turning ideas into digital reality. When I’m not coding, I’m either learning something new or ideating the next big thing.
              </p>
              <div className="text-center md:text-left">
                <a
                  href="/Diya's_Resume.pdf"
                  download
                  aria-label="Download Resume"
                  className="inline-block px-6 py-2 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-600 transition"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl p-6 bg-white/5"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {frontendskills.map((tech, key) => (
                  <span
                    key={key}
                    className="px-3 py-1 text-sm rounded-full bg-cyan-600/20 text-cyan-300 border border-cyan-400/20 hover:bg-cyan-500/30 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl p-6 bg-white/5"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {backendskills.map((tech, key) => (
                  <span
                    key={key}
                    className="px-3 py-1 text-sm rounded-full bg-cyan-600/20 text-cyan-300 border border-cyan-400/20 hover:bg-cyan-500/30 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>B.Tech in CSE</strong> – College of Engineering Chengannur (2022–2026)</li>
                <li><strong>12th Board</strong> – GHSS Kozhichal, Kannur (2020–2022)</li>
                <li><strong>Matriculation</strong> – Archangel’s School, Kannikalam (2008–2020)</li>
              </ul>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">💼 Work Experience</h3>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h4 className="font-semibold">Web Developer Intern – Prodigy Infotech (2023)</h4>
                  <p>Created interactive projects and practiced frontend JS techniques.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Innovator – WeStart Startup Mission (2024)</h4>
                  <p>Ideated and collaborated in a startup environment to develop problem-solving skills.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
