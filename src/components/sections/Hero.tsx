import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`absolute inset-0 top-[100px] sm:top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-col sm:flex-row items-center sm:items-start gap-5`}
      >
        {/* Decorative Line */}
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#00f0ff] shadow-[0_0_16px_#00f0ff]" />
          <div className="h-24 w-1 sm:h-80 bg-gradient-to-b from-[#00f0ff] via-[#bf61ff] to-transparent" />
        </div>

        {/* Text Block */}
        <motion.div
          className="text-center sm:text-left z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[13px] sm:text-[15px] font-semibold uppercase tracking-[4px] mb-3 text-[#00f0ff]">
            Welcome to my portfolio
          </p>
          <h1 className={`${styles.heroHeadText}`}>
            <span className="text-white">Hi, I'm </span>
            <span className="text-glow text-[#00f0ff]">{config.hero.name}</span>
          </h1>

          <motion.div
            className="mt-4 space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className={`${styles.heroSubText} text-white/60`}>{config.hero.p[0]}</p>
            <p className="text-[15px] sm:text-[18px] font-medium text-white/80">{config.hero.p[1]}</p>
          </motion.div>

          {/* Tech Tags */}
          <motion.div
            className="flex flex-wrap gap-2 mt-6 justify-center sm:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {["React", "Node.js", "MongoDB", "Express"].map((tag) => (
              <span
                key={tag}
                className="text-[12px] font-semibold px-3 py-1 rounded-full border bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/20"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="border-[#00f0ff]/40 flex h-[52px] w-[32px] sm:h-[64px] sm:w-[35px] items-start justify-center rounded-3xl border-2 p-2 hover:border-[#00f0ff]/80 transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="bg-[#00f0ff] mb-1 h-2 w-2 sm:h-3 sm:w-3 rounded-full shadow-[0_0_8px_#00f0ff]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;