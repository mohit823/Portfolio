import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-col sm:flex-row items-center sm:items-start gap-5`}
      >
        {/* Left Line */}
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-24 w-1 sm:h-80" />
        </div>

        {/* Text */}
        <div className="text-center sm:text-left">
          <h1 className="text-white font-bold text-[28px] sm:text-[40px]">
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>

          <p className="mt-2 text-[14px] sm:text-[18px] text-gray-300">
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="border-secondary flex h-[50px] w-[30px] sm:h-[64px] sm:w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-2 w-2 sm:h-3 sm:w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;