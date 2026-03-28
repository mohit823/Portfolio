import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";

// Map project names to relevant emojis and gradient colors
const projectMeta: Record<string, { emoji: string; gradient: string; techIcons: string[] }> = {
  "Task Manager App": {
    emoji: "📋",
    gradient: "from-[#64ffda]/20 to-[#0a192f]",
    techIcons: ["HTML", "CSS", "JS"],
  },
  "React Todo App": {
    emoji: "⚛️",
    gradient: "from-[#915EFF]/20 to-[#0a192f]",
    techIcons: ["React", "Hooks", "CSS"],
  },
  "Birthday Wish App": {
    emoji: "🎂",
    gradient: "from-[#ff6b9d]/20 to-[#0a192f]",
    techIcons: ["HTML", "CSS", "JS"],
  },
};

const defaultMeta = {
  emoji: "🚀",
  gradient: "from-[#64ffda]/20 to-[#0a192f]",
  techIcons: ["Web"],
};

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
}) => {
  const meta = projectMeta[name] || defaultMeta;

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.3, 0.75)}
      className={`relative group w-full rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl`}
    >
      {/* Card border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#64ffda]/10 via-transparent to-[#915EFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className={`relative bg-gradient-to-br ${meta.gradient} border border-white/5 group-hover:border-[#64ffda]/20 rounded-2xl p-6 sm:p-7 h-full backdrop-blur-sm transition-all duration-500`}>

        {/* Top row: Emoji icon + Tech badges */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 text-3xl group-hover:scale-110 transition-transform duration-300">
            {meta.emoji}
          </div>
          <div className="flex gap-1.5 flex-wrap justify-end">
            {meta.techIcons.map((tech) => (
              <span
                key={tech}
                className="text-[10px] sm:text-[11px] font-medium text-[#64ffda] bg-[#64ffda]/10 border border-[#64ffda]/20 px-2 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project title */}
        <h3 className="text-[18px] sm:text-[20px] font-bold text-white mb-2 group-hover:text-[#64ffda] transition-colors duration-300">
          {name}
        </h3>

        {/* Description */}
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-secondary/90 mb-5">
          {testimonial}
        </p>

        {/* Footer */}
        <div className="flex items-center gap-2 pt-4 border-t border-white/5">
          <div className="w-2 h-2 rounded-full bg-[#64ffda] animate-pulse" />
          <p className="text-[12px] sm:text-[13px] text-secondary">
            <span className="text-white/80 font-medium">{designation}</span>
            {" • "}
            <span className="text-[#64ffda]/70">{company}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-16 rounded-[20px]">
      {/* HEADER */}
      <div className={`${styles.padding} bg-tertiary rounded-2xl`}>
        <Header
          useMotion={true}
          h2="Project Highlights"
          p="MY WORK"
        />
      </div>

      {/* CARDS */}
      <div
        className={`${styles.paddingX} -mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pb-14`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;