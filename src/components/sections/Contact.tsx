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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send("service_8roy749", "template_5ggjyez", { name: form.name, email: form.email, message: form.message }, "PTld-daA8bRwQu9QJ")
      .then(() => { setLoading(false); alert("Message sent successfully ✅"); setForm(INITIAL_STATE); })
      .catch((error) => { setLoading(false); console.log(error); alert("Something went wrong ❌"); });
  };

  return (
    <div className="flex flex-col-reverse gap-8 overflow-hidden mt-8 xl:mt-12 xl:flex-row">
      {/* Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl p-6 sm:p-8 border border-white/5 bg-[#0a061d]"
      >
        <Header useMotion={false} {...config.contact} />

        <a
          href={`mailto:${config.html.email}`}
          className="mt-4 flex items-center gap-2 text-[13px] font-medium text-white/40 hover:text-[#00f0ff] transition-colors duration-200 w-fit"
        >
          <span>📧</span> {config.html.email}
        </a>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } = config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";
            return (
              <label key={input} className="flex flex-col gap-2">
                <span className="text-[12px] font-semibold uppercase tracking-wider text-white/40">
                  {span}
                </span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[input]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="rounded-xl px-4 py-3 text-[14px] font-medium outline-none border bg-white/5 border-white/8 text-white placeholder:text-white/20 focus:border-[#00f0ff]/40 focus:ring-2 focus:ring-[#00f0ff]/10 transition-all duration-200"
                  {...(input === "message" && { rows: 6 })}
                />
              </label>
            );
          })}

          <button
            type="submit"
            className="w-full rounded-xl py-3 text-[15px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg mt-2"
            style={{ background: "linear-gradient(135deg, #00f0ff, #bf61ff)" }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
                  <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Sending...
              </span>
            ) : "Send Message ✉️"}
          </button>
        </form>
      </motion.div>

      {/* Globe */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[300px] sm:h-[400px] md:h-[500px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");