import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
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

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        toast.success("✅ Message sent successfully!");
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch(() => {
        toast.error("❌ Failed to send message. Please try again.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black py-24 px-4 text-white"
    >
      <RevealOnScroll>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          <Toaster position="top-right" reverseOrder={false} />

          {/* Heading */}
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          {/* Form */}
          <form onSubmit={sendEmail} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
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
            </div>

            <textarea
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 text-white px-4 py-3 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition"
            />

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
          </form>

          {/* Contact Info */}
          <div className="mt-10 text-center space-y-4 text-cyan-300 text-lg">
            <a
              href="tel:+917306457535"
              className="flex justify-center items-center gap-3 hover:text-white transition"
            >
              <FaPhone className="text-xl" /> +91 73064 57535
            </a>

            <a
              href="mailto:diyaditto84@gmail.com"
              className="flex justify-center items-center gap-3 hover:text-white transition"
            >
              <FaEnvelope className="text-xl" /> diyaditto84@gmail.com
            </a>

            <a
              href="https://goo.gl/maps/HdUKYzjXZpNzHvW58"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-3 hover:text-white transition"
            >
              <FaMapMarkerAlt className="text-xl" />
              Kannur, Kerala
            </a>
          </div>

          {/* Social Links */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-300 mb-4">
              Follow me on
            </h3>
            <div className="flex justify-center gap-6 text-cyan-400 text-3xl">
              <a
                href="https://github.com/DiyaDitto"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_cyan]"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/diya-ditto-368446257/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_cyan]"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/_diii_ya__/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_cyan]"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center border-t border-white/10 pt-6 text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Diya Ditto. Crafted with 💖 using React &
            TailwindCSS.
          </motion.footer>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
