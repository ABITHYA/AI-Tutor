import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { FiArrowRight, FiMenu, FiSparkles, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'AI Tutor', href: '/ai-tutor' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Features', href: '/features' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-7xl rounded-full border border-white/10 bg-white/6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_70px_rgba(34,211,238,0.12),0_12px_40px_rgba(59,130,246,0.12)] backdrop-blur-2xl"
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <motion.a
            href="/"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 via-sky-500/20 to-violet-500/20 shadow-[0_0_18px_rgba(34,211,238,0.18)]">
              <FiSparkles className="text-cyan-300" />
            </div>
            <div className="leading-none">
              <p className="text-sm font-semibold tracking-[0.24em] text-white">LearnNova</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.26em] text-slate-400">
                AI Learning Platform
              </p>
            </div>
          </motion.a>

          <div className="hidden flex-1 items-center justify-center lg:flex">
            <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              {links.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 * index }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive(link.href)
                        ? 'text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <motion.span
                      className="absolute inset-x-2 bottom-1.5 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      animate={{ scaleX: isActive(link.href) ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <motion.a
              href="/login"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
            >
              Login
            </motion.a>
            <motion.a
              href="/register"
              whileHover={{ y: -2, scale: 1.03, boxShadow: '0 0 28px rgba(34,211,238,0.25)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(34,211,238,0.22)]"
            >
              Get Started
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </motion.a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition-colors duration-300 hover:bg-white/10 hover:text-white lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute left-0 right-0 top-full mt-3 rounded-[28px] border border-white/10 bg-slate-950/80 p-4 shadow-[0_20px_80px_rgba(34,211,238,0.14)] backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`rounded-full px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                      isActive(link.href)
                        ? 'bg-white/10 text-white'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
                  <a
                    href="/login"
                    className="rounded-full px-4 py-3 text-sm font-medium text-slate-300 transition-colors duration-300 hover:bg-white/10 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </a>
                  <a
                    href="/register"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                    <FiArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}

export default Navbar;