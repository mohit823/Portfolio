import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_8roy749",
        "template_5ggjyez",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "PTld-daA8bRwQu9QJ"
      )
      .then(() => {
        setLoading(false);
        alert("Message sent successfully ✅");
        setForm(INITIAL_STATE);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong ❌");
      });
  };

  return (
    <div className="flex flex-col-reverse gap-6 sm:gap-8 md:gap-10 overflow-hidden mt-6 xl:mt-12 xl:flex-row">
      
      {/* LEFT SIDE FORM */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-5 sm:p-6 md:p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-col gap-5 sm:gap-6 md:gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];

            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                
                {/* LABEL */}
                <span className="mb-2 sm:mb-3 md:mb-4 text-sm md:text-base font-medium text-white">
                  {span}
                </span>

                {/* INPUT */}
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[input]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 text-sm md:text-base font-medium text-white outline-none"
                  {...(input === "message" && { rows: 6 })}
                />
              </label>
            );
          })}

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-5 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 text-sm md:text-base font-bold text-white shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* RIGHT SIDE 3D */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[250px] sm:h-[350px] md:h-[500px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");