import { motion } from "framer-motion";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index, name, description, tags, image, sourceCodeLink,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="group relative w-full sm:w-[340px] rounded-[20px] overflow-hidden border border-white/5 bg-[#0a061d] transition-all duration-500 hover:scale-[1.02] hover:border-[#00f0ff]/20 hover:shadow-[0_20px_60px_rgba(0,240,255,0.1)]"
  >
    {/* Image */}
    <div className="relative h-[210px] w-full overflow-hidden">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a061d] via-transparent to-transparent" />

      {/* GitHub Button */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <button
          onClick={() => window.open(sourceCodeLink, "_blank")}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-black/70 hover:scale-110 transition-all duration-200"
        >
          <img src={github} alt="github" className="h-5 w-5 object-contain" />
        </button>
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-[20px] font-bold text-white group-hover:text-[#00f0ff] transition-colors duration-300">
        {name}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed line-clamp-3 text-white/50">
        {description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => {
          const cls = tag.color.includes("blue")
            ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
            : tag.color.includes("green")
            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
            : "bg-pink-500/10 text-pink-400 border-pink-500/20";
          return (
            <span key={tag.name} className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${cls}`}>
              #{tag.name}
            </span>
          );
        })}
      </div>

      {/* CTA */}
      <button
        onClick={() => window.open(sourceCodeLink, "_blank")}
        className="mt-5 w-full py-2 rounded-xl text-[13px] font-bold border bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/20 hover:bg-[#00f0ff]/20 transition-all duration-300"
      >
        View Project →
      </button>
    </div>
  </motion.div>
);

const Works = () => (
  <>
    <Header useMotion={true} {...config.sections.works} />
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="text-white/60 mt-3 max-w-3xl text-[17px] leading-[30px]"
    >
      {config.sections.works.content}
    </motion.p>
    <div className="mt-16 flex flex-wrap justify-center gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "");
