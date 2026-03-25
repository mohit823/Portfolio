import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.3, 0.75)}
    className="bg-black-200 w-full rounded-2xl p-6 hover:scale-105 transition"
  >
    {/* ICON */}
    <p className="text-[30px] font-bold text-white">🚀</p>

    <div className="mt-2">
      {/* DESCRIPTION */}
      <p className="text-[16px] tracking-wide text-white">{testimonial}</p>

      {/* FOOTER */}
      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-[15px] font-semibold text-white">
            {name}
          </p>
          <p className="text-secondary text-[12px]">
            {designation} • {company}
          </p>
        </div>

        <img
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

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
        className={`${styles.paddingX} -mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-14`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;