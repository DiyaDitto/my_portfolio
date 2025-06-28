import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Download } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";

export const About = () => {
  const frontendskills = ["React", "Vue", "TypeScript", "JavaScript", "TailwindCSS"];
  const backendskills = ["Node.js", "Python", "AWS", "MongoDB", "SQL"];

  return (
    <section
      id="about"
      className="min-h-screen py-28 px-4 md:px-8 bg-black text-white flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-6xl w-full">
          {/* Section Heading */}
          <h2 className="text-center text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text mb-16">
            About Me
          </h2>

          {/* Image & Intro */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-14">
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
                  e.target.src = "/fallback.jpg";
                }}
                alt="Diya Ditto"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-cyan-400 object-cover shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl text-gray-300"
            >
              <p className="leading-relaxed mb-6 text-lg">
                I'm <span className="text-cyan-400 font-semibold">Diya Ditto</span>, a curious and passionate full-stack web developer crafting engaging digital experiences. I love building performant UIs and smart backend systems that bring ideas to life.
              </p>
              <a
                href="/Diya's_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-600 transition"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {[{ title: "Frontend", skills: frontendskills }, { title: "Backend", skills: backendskills }].map((block, idx) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white/5 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{block.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {block.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-cyan-600/20 text-cyan-300 rounded-full border border-cyan-400/30 hover:bg-cyan-600/40 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
                <GraduationCap className="w-5 h-5" />
                Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>B.Tech in CSE</strong> – College of Engineering Chengannur (2022–2026)</li>
                <li><strong>12th Board</strong> – GHSS Kozhichal, Kannur (2020–2022)</li>
                <li><strong>Matriculation</strong> – Archangel’s School, Kannikalam (2008–2020)</li>
              </ul>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
                <Briefcase className="w-5 h-5" />
                Work Experience
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <h4 className="font-semibold">Web Developer Intern – Prodigy Infotech (2023)</h4>
                  <p>Created interactive frontend projects, honed responsive design, and JS proficiency.</p>
                </li>
                <li>
                  <h4 className="font-semibold">Innovator – WeStart Startup Mission (2024)</h4>
                  <p>Collaborated on early-stage startup ideation, UI wireframing, and strategic problem-solving.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
