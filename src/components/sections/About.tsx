import React, { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { Zap, Settings, Database, Rocket } from "lucide-react";

/* ─── Card metadata ────────────────────────────────────────────────── */
const cardMeta = [
  {
    label: "FRONTEND",
    title: "UI Development",
    description: "Crafting responsive, animated UIs with React.js and modern CSS frameworks for pixel-perfect experiences.",
    skills: ["React.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    accent: "#00d2ff",
    secondary: "#3a7bd5",
    glow: "rgba(0, 210, 255, 0.3)",
    num: "01",
    Icon: Zap,
  },
  {
    label: "BACKEND",
    title: "API Engineering",
    description: "Building robust REST APIs and server-side logic with Node.js & Express for scalable architectures.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    accent: "#a855f7",
    secondary: "#7e22ce",
    glow: "rgba(168, 85, 247, 0.3)",
    num: "02",
    Icon: Settings,
  },
  {
    label: "DATABASE",
    title: "Data Architecture",
    description: "Designing and managing scalable NoSQL databases using MongoDB with expert data modeling.",
    skills: ["MongoDB", "Mongoose", "Aggregation", "Indexing"],
    accent: "#ec4899",
    secondary: "#db2777",
    glow: "rgba(236, 72, 153, 0.3)",
    num: "03",
    Icon: Database,
  },
  {
    label: "FULL STACK",
    title: "MERN Development",
    description: "End-to-end MERN stack development from ideation to deployment with modern DevOps practices.",
    skills: ["MERN Stack", "Git", "Docker", "Deployment"],
    accent: "#f97316",
    secondary: "#ea580c",
    glow: "rgba(249, 115, 22, 0.3)",
    num: "04",
    Icon: Rocket,
  },
];

/* ─── 3-D Tilt card wrapper ─────────────────────────────────────────── */
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = "", style }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── Single card ───────────────────────────────────────────────────── */
interface IServiceCard {
  index: number;
}

const ServiceCard: React.FC<IServiceCard> = ({ index }) => {
  const meta = cardMeta[index] ?? cardMeta[0];
  const Icon = meta.Icon;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="group relative w-full sm:w-[320px] lg:w-[280px] aspect-[4/5]"
    >
      <TiltCard className="h-full w-full">
        {/* Main Card Body */}
        <div
          className="relative h-full w-full rounded-[24px] bg-[#0c0a1d]/80 border border-white/5 p-8 flex flex-col overflow-hidden transition-all duration-500 group-hover:border-white/10 group-hover:bg-[#0c0a1d]"
          style={{
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
          }}
        >
          {/* Active Gradient Border (Hover) */}
          <div
            className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              padding: "1.5px",
              background: `linear-gradient(135deg, ${meta.accent}, transparent 60%)`,
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          {/* Top Row: Number & Icon Bubble Area */}
          <div className="flex justify-between items-start z-10">
            <span
              className="text-[64px] font-bold leading-none select-none opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-300"
              style={{ color: meta.accent, fontFamily: "'Sora', sans-serif" }}
            >
              {meta.num}
            </span>

            {/* Icon Bubble */}
            <div className="relative">
              {/* Background circular glow element */}
              <div
                className="absolute -inset-4 rounded-full opacity-10 blur-xl transition-all duration-500 group-hover:opacity-20"
                style={{ background: meta.accent }}
              />
              <div
                className="relative w-16 h-16 rounded-[20px] flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Secondary inner circle for icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${meta.accent}20`,
                    boxShadow: `0 0 20px -5px ${meta.glow}`,
                  }}
                >
                  <Icon size={22} color={meta.accent} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="mt-6 flex flex-col flex-1 z-10">
            {/* Label with Dash */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-[2.5px] rounded-full" style={{ background: meta.accent }} />
              <span
                className="text-[11px] font-black tracking-[3px]"
                style={{ color: meta.accent }}
              >
                {meta.label}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[22px] font-bold text-white mb-3">
              {meta.title}
            </h3>

            {/* Description */}
            <p className="text-[13.5px] leading-relaxed text-white/40 mb-6 flex-1">
              {meta.description}
            </p>

            {/* Tags / Skills */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {meta.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] font-bold px-3 py-1 rounded-full border transition-colors duration-300"
                  style={{
                    color: meta.accent,
                    borderColor: `${meta.accent}30`,
                    background: `${meta.accent}08`
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = `${meta.accent}20`;
                    el.style.borderColor = `${meta.accent}60`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = `${meta.accent}08`;
                    el.style.borderColor = `${meta.accent}30`;
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Glow Element */}
          <div
            className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
            style={{ background: meta.accent }}
          />
        </div>
      </TiltCard>
    </motion.div>
  );
};

const About = () => (
  <>
    <Header useMotion={true} {...config.sections.about} />

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="text-white/45 mt-4 max-w-3xl text-[17px] leading-[30px]"
    >
      {config.sections.about.content}
    </motion.p>

    <div className="mt-16 flex flex-wrap justify-center gap-10">
      {services.map((_, index) => (
        <ServiceCard key={index} index={index} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");