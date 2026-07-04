import { useState } from "react";
import { motion } from "framer-motion";
import { HiArrowRight, HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "AI Tutor", href: "#ai" },
  { name: "About", href: "#about" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="w-full border-b border-white/10 bg-black/30 backdrop-blur-2xl shadow-lg">
        <div className="max-w-[1600px] mx-auto h-20 px-10 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.45)]">
              <span className="text-lg">🪐</span>
            </div>

            <h1 className="text-3xl font-bold text-white">
              Learn<span className="text-cyan-400">Nova</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="relative text-gray-300 hover:text-white font-medium transition-all duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}

            <button className="text-gray-300 hover:text-white font-medium transition">
              Login
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
            >
              Get Started
              <HiArrowRight size={18} />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto text-white lg:hidden"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/10 bg-black/50 p-6 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <button className="text-left text-gray-300 hover:text-white">
                Login
              </button>

              <button className="rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 py-3 font-semibold text-white">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;