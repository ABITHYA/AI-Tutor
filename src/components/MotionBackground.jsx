import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const stars = Array.from({ length: 70}, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 4 + 2,
  delay: Math.random() * 5,
}));

const particles = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * 4,
}));

{[...Array(8)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute h-[2px]"
    style={{
      top: `${15 + i * 10}%`,
      width: "260px",
      background:
        "linear-gradient(90deg, transparent, #22d3ee, transparent)",
      filter: "blur(1px)",
    }}
    animate={{
      x: ["-25vw", "120vw"],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 10 + i,
      repeat: Infinity,
      delay: i * 2,
      ease: "linear",
    }}
  />
))}

function MotionBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 40,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 40,
    damping: 20,
  });

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set((e.clientX - window.innerWidth / 2) * 0.02);
      mouseY.set((e.clientY - window.innerHeight / 2) * 0.02);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#050816]">

      <motion.div
        style={{ x, y }}
        className="absolute inset-0"
      >

        {/* Aurora 1 */}
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, -120, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[180px] top-[-200px] left-[-150px]"
        />

        {/* Aurora 2 */}
        <motion.div
          animate={{
            x: [0, -200, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[650px] h-[650px] rounded-full bg-blue-600/20 blur-[170px] bottom-[-150px] right-[-150px]"
        />

        {/* Aurora 3 */}
        <motion.div
          animate={{
            y: [0, -100, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[500px] h-[500px] rounded-full bg-violet-500/20 blur-[170px] top-[35%] left-[40%]"
        />

        {/* Stars */}
        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* AI Energy Particles */}

{particles.map((particle) => (
  <motion.div
    key={particle.id}
    className="absolute rounded-full"
    style={{
      top: `${particle.top}%`,
      left: `${particle.left}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      background: "#22d3ee",
      boxShadow: "0 0 12px #22d3ee",
    }}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.6, 1],
    }}
    transition={{
      duration: particle.duration,
      delay: particle.delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
))}
      </motion.div>

    </div>
  );
}

export default MotionBackground;