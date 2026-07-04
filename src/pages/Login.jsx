import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiMail,
  HiLockClosed,
  HiCheck,
  HiAcademicCap,
} from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import MotionBackground from "../components/MotionBackground";

function Login() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <MotionBackground />

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ================= LEFT SIDE - WELCOME SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl px-5 py-2 mb-8"
            >
              <HiAcademicCap className="text-cyan-400 text-lg" />
              <span className="text-sm text-cyan-300 font-medium">
                AI Learning Platform
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-4"
            >
              Welcome Back
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent mb-6"
            >
              Continue Your Learning Journey
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-400 leading-relaxed max-w-lg mb-12"
            >
              Access your personalized AI tutor, continue your courses, track your progress, and unlock new achievements.
            </motion.p>

            {/* Feature Rows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <HiCheck className="text-cyan-400 text-lg" />
                </div>
                <span className="text-slate-300 font-medium">AI Tutor Available 24/7</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <HiCheck className="text-cyan-400 text-lg" />
                </div>
                <span className="text-slate-300 font-medium">Personalized Learning Paths</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <HiCheck className="text-cyan-400 text-lg" />
                </div>
                <span className="text-slate-300 font-medium">Secure Cloud Sync</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE - GLASS LOGIN CARD ================= */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 shadow-2xl shadow-cyan-500/10">
              
              {/* Logo & Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <HiAcademicCap className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
                <p className="text-slate-400">Welcome back to LearnNova</p>
              </motion.div>

              {/* Input Fields */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-5 mb-6"
              >
                {/* Email Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <HiMail className="text-slate-400 text-lg" />
                  </div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <HiLockClosed className="text-slate-400 text-lg" />
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </div>
              </motion.div>

              {/* Remember Me & Forgot Password */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-between mb-6"
              >
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5 text-cyan-400 focus:ring-cyan-400 focus:ring-offset-0" />
                  <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Remember me</span>
                </label>
                <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">Forgot password?</a>
              </motion.div>

              {/* Login Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 border border-white/10"
              >
                Sign In
                <HiArrowRight />
              </motion.button>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-4 my-6"
              >
                <div className="flex-1 h-px bg-white/10"></div>
                <span className="text-sm text-slate-400">OR</span>
                <div className="flex-1 h-px bg-white/10"></div>
              </motion.div>

              {/* Social Login Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-3"
              >
                <button className="w-full flex items-center justify-center gap-3 rounded-xl bg-white/5 border border-white/10 px-6 py-3.5 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <FcGoogle className="text-xl" />
                  Continue with Google
                </button>

                <button className="w-full flex items-center justify-center gap-3 rounded-xl bg-white/5 border border-white/10 px-6 py-3.5 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <FaGithub className="text-xl" />
                  Continue with GitHub
                </button>
              </motion.div>

              {/* Bottom Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-center mt-8 text-slate-400"
              >
                Don't have an account?{" "}
                <Link to="/" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                  Create Account
                </Link>
              </motion.p>

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}

export default Login;
