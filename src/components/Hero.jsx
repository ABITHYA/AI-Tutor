import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 lg:px-16">

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[1fr_1fr] items-center gap-20 min-h-screen">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[540px] justify-self-center lg:justify-self-start lg:pl-12"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl px-5 py-2">

              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-sm text-cyan-300 font-medium">
                AI Powered Learning Platform
              </span>

            </div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-5xl lg:text-[58px] font-extrabold leading-[1.08] tracking-tight text-white"
            >

              Learn Beyond

              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Limits.
              </span>

            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 max-w-[500px] text-lg leading-9 text-slate-400"
            >

              Experience AI-powered education with intelligent tutoring,
              adaptive learning paths, personalized quizzes, AI-generated
              study plans and real-time analytics that help every student
              learn faster.

            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-5 mt-10"
            >

              <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-8 py-3 font-semibold text-white shadow-[0_0_35px_rgba(34,211,238,.35)] hover:scale-105 transition">

                Get Started

                <HiArrowRight />

              </button>

              <button className="rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-3 font-medium text-white hover:bg-white/10 transition">

                Explore Courses

              </button>

            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-16 mt-12"
            >

              <div>
                <h2 className="text-4xl font-bold text-white">
                  25K+
                </h2>

                <p className="mt-2 text-slate-400">
                  Students
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">
                  500+
                </h2>

                <p className="mt-2 text-slate-400">
                  Courses
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">
                  24/7
                </h2>

                <p className="mt-2 text-slate-400">
                  AI Tutor
                </p>
              </div>

            </motion.div>

          </motion.div>

          {/* ================= RIGHT ================= */}
                    <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >

            {/* Background Glow */}

            <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Orb Container */}

            <div className="relative flex items-center justify-center w-[340px] h-[340px]">

              {/* Outer Ring */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-[320px] h-[320px] rounded-full border border-cyan-400/20"
              />

              {/* Middle Ring */}

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-[250px] h-[250px] rounded-full border border-cyan-300/20"
              />

              {/* Inner Ring */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-[180px] h-[180px] rounded-full border border-white/10"
              />

              {/* Orbit 1 */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-[350px] h-[350px]"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee]" />
              </motion.div>

              {/* Orbit 2 */}

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-[280px] h-[280px]"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-400 shadow-[0_0_25px_#8b5cf6]" />
              </motion.div>

              {/* AI Core */}

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative flex items-center justify-center w-36 h-36 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-[0_0_80px_rgba(34,211,238,.45)]"
              >

                <div className="absolute inset-5 rounded-full bg-white/15 backdrop-blur-xl" />

                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="w-14 h-14 rounded-full bg-white shadow-[0_0_45px_white]"
                />

              </motion.div>

            </div>

            {/* Orb Caption */}

            <div className="absolute -bottom-20 text-center">

              <h2 className="text-4xl font-bold text-white">
                AI Tutor
              </h2>

              <p className="mt-3 text-slate-400">
                Personalized • Intelligent • Always Available
              </p>

            </div>

          </motion.div>

        </div>

      </div>
            {/* Left Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/2
          -translate-y-1/2
          w-[380px]
          h-[380px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/2
          -translate-y-1/2
          w-[380px]
          h-[380px]
          rounded-full
          bg-blue-500/10
          blur-[180px]
        "
      />

      {/* Center Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-violet-500/5
          blur-[250px]
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          w-full
          h-48
          bg-gradient-to-t
          from-[#050816]
          via-[#050816]/70
          to-transparent
        "
      />
    </section>
  );
}

export default Hero;