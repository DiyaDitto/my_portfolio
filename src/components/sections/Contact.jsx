import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import RevealOnScroll from "../RevealOnScroll";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.user_email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      () => {
        toast.success("✅ Message sent successfully!");
        setFormData({ user_name: "", user_email: "", message: "" });
      },
      () => {
        toast.error("❌ Failed to send message. Please try again.");
      }
    ).finally(() => setIsLoading(false));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black py-24 px-4 text-white"
    >
      <RevealOnScroll>
        <div className="w-full max-w-3xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
          <Toaster position="top-right" reverseOrder={false} />

          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Let's Connect
          </motion.h2>

          <motion.form
            onSubmit={sendEmail}
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
          >
            <motion.div
              className="grid gap-4 md:grid-cols-2"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={formData.user_name}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 text-white px-4 py-3 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                value={formData.user_email}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 text-white px-4 py-3 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition"
              />
            </motion.div>

            <motion.textarea
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 text-white px-4 py-3 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            ></motion.textarea>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg ${
                  isLoading ? "cursor-not-allowed opacity-60" : ""
                }`}
              >
                {isLoading ? (
                  <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                ) : (
                  "✉️ Send Message"
                )}
              </button>
            </motion.div>
          </motion.form>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Follow me on</h3>
            <div className="flex justify-center gap-6 text-cyan-400 text-3xl">
              <a
                href="https://github.com/DiyaDitto"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/diya-ditto-368446257/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/_diii_ya__/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
